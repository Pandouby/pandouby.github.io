import { ComposableMap, Geographies, Geography, Annotation} from "react-simple-maps";
import map from "../../../../public/topoJSON/map.json";

export const LocationMap = () => {
    return (
        <>
        <ComposableMap
					projection="geoAzimuthalEqualArea"
					projectionConfig={{
						rotate: [-10.0, -52.0, 0],
						center: [-1, -5],
						scale: 7000,
					}}
				>
					<Geographies
						geography={map}
						fill="#D6D6DA"
						stroke="#FFFFFF"
						strokeWidth={0.5}
					>
						{({ geographies }) =>
							geographies.map((geo) => (
								<Geography key={geo.rsmKey} geography={geo} />
							))
						}
					</Geographies>
					<Annotation
						subject={[8.55, 47.36667]}
						dx={-90}
						dy={-30}
						connectorProps={{
							stroke: "#FF5533",
							strokeWidth: 3,
							strokeLinecap: "round",
                            fontSize: "200px"
						}}
					>
						<text
							x="-8"
							textAnchor="end"
							alignmentBaseline="middle"
							fill="#F53"
						>
							{"Zurich"}
						</text>
					</Annotation>
				</ComposableMap>
        </>
    )
}
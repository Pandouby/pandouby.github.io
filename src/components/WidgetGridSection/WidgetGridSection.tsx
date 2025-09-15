import { FC } from "react"
import "./styles.scss"
import { WidgetGrid } from "./WidgetGrid/WidgetGrid"

export const WidgetGridSection: FC = () => {
    return (
        <div className="section widget-grid-section">
            <WidgetGrid />
        </div>
    )
}
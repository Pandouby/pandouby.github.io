import { FC } from 'react';
import "./styles.scss"
import { Widget } from './Widget';

export const WidgetGrid: FC = () => {
    return (
        <div className='widget-grid'>
        <Widget className={'widget-1'} style={{gridArea: "widget-1"}}>
                test 1
            </Widget>

           <Widget className={'widget-2'} style={{gridArea: "widget-2"}}>
                test 2
            </Widget>

            <Widget className={'widget-3'} style={{gridArea: "widget-3"}}>
                test 3
            </Widget>

           <Widget className={'widget-4'} style={{gridArea: "widget-4"}}>
                test 4
            </Widget>
        </div>
    )
}
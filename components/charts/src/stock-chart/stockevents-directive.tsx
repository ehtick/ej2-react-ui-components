import { ComplexBase } from '@syncfusion/ej2-react-base';
import { StockEventsSettingsModel } from '@syncfusion/ej2-charts';


/**
 * `StockChartStockEvents` directive represent a stockevent of the react chart. 
 * It must be contained in a Chart component(`StockChartComponent`). 
 * ```tsx
 * <StockChartComponent>
 * <StockChartStockEventsDirective>
 * <StockChartStockEventDirective></StockChartStockEventDirective>
 * </StockChartStockEventsDirective>
 * </StockChartComponent>
 * ```
 */
export class StockChartStockEventDirective extends ComplexBase<StockEventsSettingsModel, StockEventsSettingsModel> {
    public static moduleName: string = 'stockChartStockEvent';
}

export class StockChartStockEventsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'stockEvents';
    public static moduleName: string = 'stockChartStockEvents';
}
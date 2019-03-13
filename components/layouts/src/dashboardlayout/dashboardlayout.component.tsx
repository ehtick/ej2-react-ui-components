import * as React from 'react';
import { DashboardLayout, DashboardLayoutModel } from '@syncfusion/ej2-layouts';
import { ComponentBase, applyMixins, DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';



/**
 * Represents the Essential JS 2 React DashboardLayout Component.
 * ```ts
 * <DashBoardLayoutComponent></DashBoardLayoutComponent>
 * ```
 */
export class DashboardLayoutComponent extends DashboardLayout {
    public state: Readonly<{ children?: React.ReactNode | React.ReactNode[] }> 
    & Readonly<DashboardLayoutModel & DefaultHtmlAttributes>;
    public setState: any;
    private getDefaultAttributes: Function;
    public initRenderCalled: boolean = false;
    private checkInjectedModules: boolean = false;
    public directivekeys: { [key: string]: Object } = {'panels': 'panel'};
    public props: Readonly<{ children?: React.ReactNode | React.ReactNode[] }>
     & Readonly<DashboardLayoutModel & DefaultHtmlAttributes>;
    public forceUpdate: (callBack?: () => any) => void;
    public context: Object;
    public isReactComponent: Object;
    public refs: {
        [key: string]: React.ReactInstance
    };

    constructor(props: any) {
        super(props);
    }

    public render(): any {
        if ((this.element && !this.initRenderCalled) || this.refreshing) {
            super.render();
            this.initRenderCalled = true;
        } else {
            return React.createElement('div', this.getDefaultAttributes(), this.props.children);
        }

    }
}

applyMixins(DashboardLayoutComponent, [ComponentBase, React.PureComponent]);

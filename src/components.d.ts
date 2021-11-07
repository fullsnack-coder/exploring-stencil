/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
export namespace Components {
    interface AppHome {
        "name": string;
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface AtomButton {
    }
    interface FirstComponent {
        "componentName": string;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAtomButtonElement extends Components.AtomButton, HTMLStencilElement {
    }
    var HTMLAtomButtonElement: {
        prototype: HTMLAtomButtonElement;
        new (): HTMLAtomButtonElement;
    };
    interface HTMLFirstComponentElement extends Components.FirstComponent, HTMLStencilElement {
    }
    var HTMLFirstComponentElement: {
        prototype: HTMLFirstComponentElement;
        new (): HTMLFirstComponentElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "atom-button": HTMLAtomButtonElement;
        "first-component": HTMLFirstComponentElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
        "name"?: string;
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface AtomButton {
    }
    interface FirstComponent {
        "componentName"?: string;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "atom-button": AtomButton;
        "first-component": FirstComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "atom-button": LocalJSX.AtomButton & JSXBase.HTMLAttributes<HTMLAtomButtonElement>;
            "first-component": LocalJSX.FirstComponent & JSXBase.HTMLAttributes<HTMLFirstComponentElement>;
        }
    }
}
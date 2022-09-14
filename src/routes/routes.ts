
import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
//import { LazyPage1 } from "../01-lazyload/pages";
//import { LazyPage2 } from '../01-lazyload/pages/LazyPage2';
//import { LazyPage3 } from '../01-lazyload/pages/LazyPage3';

type JSXComponent = () => JSX.Element;

interface Route {
   
        to: string;
        path: string;
        Component: LazyExoticComponent<JSXComponent>  |  JSXComponent; //nuestros componentes como LazyPage1, son funciones que regresan un elemento JSX 
        name: string;
  
}

const LazyLayout =lazy(() => import (/* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"));
//const Lazy1 =lazy(() => import (/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1"));
//const Lazy2 =lazy(() => import (/* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2"));
//const Lazy3 =lazy(() => import (/* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3"));

export const routes:Route[] = [
    {
        to:"/lazyload/",
        path: "/lazyload/*",
        Component: LazyLayout, 
        name: "Lazylayout"
    },
    {
        to:"/no-lazy",
        path: "no-lazy",
        Component: NoLazy,
        name: "nolazy"
    },
   
]
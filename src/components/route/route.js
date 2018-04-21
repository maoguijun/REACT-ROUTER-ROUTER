import React from "react";
import {BrowserRouter as Router,Route,Link } from 'react-router-dom';
import { hashHistory } from 'react-router';
import { comment } from "../../config";
import HelloWord from "../demos/1_HelloWord";
import JSX from "../demos/2_JSX";
import Tick from "../demos/3_Tick";
import Comment from "../demos/4_Comment";
import List from "../demos/5_List";
import TextArea from "../demos/6_TextArea";
import Welcome from "../demos/7_Welcome";
import Clock from "../demos/8_Clock";
import Toggle from "../demos/9_Toggle";
import LoginControl from "../demos/10_LoginControl";
import Key from "../demos/11_Key";
import Select from "../demos/12_Select";
import SignUp from "../demos/13_SignUp";
import Calculator from "../demos/14_Calculator";
import RenderProps from "../demos/15_RenderProps";
import RouterBasic from "../router-demos/01_RouterBasic";
import UrlParams from "../router-demos/02_UrlParams";
import Authentication from "../router-demos/03_Authentication";
import CustomLink from "../router-demos/04_CustomLink";
import PreventNav from "../router-demos/05_PreventNav";
import NotMatch from "../router-demos/06_NotMatch";
import Recursive from "../router-demos/07_Recursive";
import Ambiguous from "../router-demos/08_Ambiguous";
import SideBar from "../router-demos/09_SideBar";
import RouteConfig from "../router-demos/10_RouteConfig";
import Animation from "../router-demos/11_Animation";
import ModalGallery from "../router-demos/12_ModalGallery";


export const componentList = {
  HelloWord: <Route path='/HelloWord' component={HelloWord} />,
  // HelloWord: <HelloWord />,
  JSX: <Route path='/JSX' component={JSX} />,
  // JSX: <JSX />,
  Tick: <Route path='/Tick' component={Tick} />,
  // Tick: <Tick />,
  // Comment: <Route path='/Comment' component={Comment} />,
  Comment: (
    <Comment date={comment.date} text={comment.text} author={comment.author} />
  ),
  // List: <Route path='/List' component={List} />,
  List: <List numbers={comment.numbers} />,
  TextArea: <Route path='/TextArea' component={TextArea} />,
  // TextArea: <TextArea />,
  Welcome: <Route path='/Welcome' component={Welcome} />,
  // Welcome: <Welcome />,
  Clock: <Route path='/Clock' component={Clock} />,
  // Clock: <Clock />,
  Toggle: <Route path='/Toggle' component={Toggle} />,
  // Toggle: <Toggle />,
  LoginControl: <Route path='/LoginControl' component={LoginControl} />,
  // LoginControl: <LoginControl />,
  // Key: <Route path='/Key' component={Key} />,
  Key: <Key posts={comment.posts} />,
  Select: <Route path='/Select' component={Select} />,
  // Select: <Select />,
  SignUp: <Route path='/SignUp' component={SignUp} />,
  // SignUp: <SignUp />,
  Calculator: <Route path='/Calculator' component={Calculator} />,
  // Calculator: <Calculator />,
  RenderProps: <Route path='/RenderProps' component={RenderProps} />,
  // RenderProps: <RenderProps />,
  RouterBasic: <Route path='/RouterBasic' component={RouterBasic} />,
  // RouterBasic: <RouterBasic />,
  UrlParams: <Route path='/UrlParams' component={UrlParams} />,
  // UrlParams: <UrlParams />,
  Authentication: <Route path='/Authentication' component={Authentication} />,
  // Authentication: <Authentication />,
  CustomLink: <Route path='/CustomLink' component={CustomLink} />,
  // CustomLink: <CustomLink />,
  PreventNav: <Route path='/PreventNav' component={PreventNav} />,
  // PreventNav: <PreventNav />,
  NotMatch: <Route path='/NotMatch' component={NotMatch} />,
  // NotMatch: <NotMatch />,
  Recursive: <Route path='/Recursive' component={Recursive} />,
  // Recursive: <Recursive />,
  Ambiguous: <Route path='/Ambiguous' component={Ambiguous} />,
  // Ambiguous: <Ambiguous />,
  SideBar: <Route path='/SideBar' component={SideBar} />,
  // SideBar: <SideBar />,
  RouteConfig: <Route path='/RouteConfig' component={RouteConfig} />,
  // RouteConfig: <RouteConfig />,
  Animation: <Route path='/Animation' component={Animation} />,
  // Animation: <Animation />,
  ModalGallery: <Route path='/ModalGallery' component={ModalGallery} />
  // ModalGallery: <ModalGallery />
  
};
export const componentNameList = [
  "HelloWord",
  "JSX",
  "Tick",
  "Comment",
  "List",
  "TextArea",
  "Welcome",
  "Clock",
  "Toggle",
  "LoginControl",
  "Key",
  "Select",
  "SignUp",
  "Calculator",
  "RenderProps",
  "RouterBasic",
  "UrlParams",
  "Authentication",
  "CustomLink",
  "PreventNav",
  "NotMatch",
  "Recursive",
  "Ambiguous",
  "SideBar",
  "RouteConfig",
  "Animation",
  "ModalGallery"
];

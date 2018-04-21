import React from "react";
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
  HelloWord: <HelloWord />,
  JSX: <JSX />,
  Tick: <Tick />,
  Comment: (
    <Comment date={comment.date} text={comment.text} author={comment.author} />
  ),
  List: <List numbers={comment.numbers} />,
  TextArea: <TextArea />,
  Welcome: <Welcome />,
  Clock: <Clock />,
  Toggle: <Toggle />,
  LoginControl: <LoginControl />,
  Key: <Key posts={comment.posts} />,
  Select: <Select />,
  SignUp: <SignUp />,
  Calculator: <Calculator />,
  RenderProps: <RenderProps />,
  RouterBasic: <RouterBasic />,
  UrlParams: <UrlParams />,
  Authentication: <Authentication />,
  CustomLink: <CustomLink />,
  PreventNav: <PreventNav />,
  NotMatch: <NotMatch />,
  Recursive: <Recursive />,
  Ambiguous: <Ambiguous />,
  SideBar: <SideBar />,
  RouteConfig: <RouteConfig />,
  Animation: <Animation />,
  ModalGallery: <ModalGallery />
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

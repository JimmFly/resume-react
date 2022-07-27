import React from "react";
import { Link } from "react-router-dom";

const Project1 = () => {
  return (
    <>
      <main className="project">
        <h1>项目介绍</h1>
        <h2>报课项目</h2>
        <Link to="https://github.com/JimmFly/project">
          前端源码 https://github.com/JimmFly/project
        </Link>
        <Link to="https://github.com/JimmFly/resume-server">
          后端源码 https://github.com/JimmFly/resume-server
        </Link>
        <p>
          这个练习项目使用node跟express搭建简单的后端.使用react脚手架+bootstrap搭建的前端项目，react-router配置路由，使用axios发送注册、登录等请求到后端服务器，通过调用后端api获取用户信息和课程列表。结合后端api与react-router做了简单的鉴权，动态显示nav。动态显示用户信息以及名下的课程。
        </p>
        <h2>中台项目</h2>
        <Link to="https://gitee.com/flyggyes/react-pc">
          前端源码 https://gitee.com/flyggyes/react-pc
        </Link>
        <p>
          这个练习项目使用react脚手架+antd组件库快速搭建，react-router配置路由，mobx进行统一的状态管理，使用axios访问后端服务，实现了简单的CRUD功能，统计图表由echarts生成。
        </p>
      </main>
    </>
  );
};

export default Project1;

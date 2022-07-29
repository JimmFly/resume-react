import React from "react";

const Project2 = () => {
  return (
    <>
      <main className="project">
        <h1>项目介绍</h1>
        <br />
        <h2>练手项目</h2>
        <a
          target="_blank"
          href="https://github.com/JimmFly/water"
          rel="noopener noreferrer"
        >
          项目源码 https://github.com/JimmFly/water
        </a>
        <p>这个练习项目里面包含了多个练手小页面</p>
        <ul>
          <li>八杯水项目：使用redux管理的一个提醒喝水小工具</li>
          <li>卡片项目：一个简单的css+hooks的小练习</li>
          <li>SVG项目：SVG的动画练习</li>
          <li>火环项目：css3和svg的动画练习</li>
          <li>白板项目：使用canvas简单实现画笔和清除功能</li>
          <li>动态背景项目：使用canvas实现动态背景</li>
          <li>jotai项目：简单的jotai状态管理练习</li>
        </ul>
      </main>
    </>
  );
};

export default Project2;

import { Person } from './Person';

export const People: Person[] = [
  {
    id: 1,
    name: "曾柃基",
    tele: "15692016921",
    address: "广东省广州市五山路华南理工大学",
    age: "21",
    avatar: "http://www.1ting.com/mv/covers/artist/c1/3199.jpg",
    edu: [{
        time: "2014.9-2018.6",
        level: "本科",
        school: "华南理工大学",
        major: "EE信息工程"
      },
      {
        time: "2016.10-2018.6",
        level: "自学社区",
        school: "freeCodeCamp",
        major: "Front-End Engineering"
      }],
    proj: [
      {
        time: "2017.3-2017.6",
        name: "空气质量检测系统",
        job: "前后端开发+数据库",
        process: [
          "该项目为学校必修的一次课程设计，开发一个基于单片机的空气监测系统。",
          "通过查找资料，确定后端方案为阿里云+flask+apache+mysql，前端采用html页面作显示界面。",
          "利用寒假所学的flask和mysql的知识完成了后端和数据库的开发工作，前端js框架采用jQuery&Vue.js，为了适应移动端的显示，css库采用bootstrap，并查阅资料学习移动端网页适配及优化。",
          "后端实现了基本的数据交互功能以及对数据库的增删查功能，前端方面尚在编码过程中，通过这个项目，进一步熟悉jQuery、Vue、bootstrap的使用，以及相关构建工具gulp的使用。"
        ]
      },
      {
        time: "2017.5-2017.7",
        name: "自学项目-个人独立博客的搭建",
        job: "前后端开发+数据库",
        process: [
          "学习Node.js的过程中打算通过搭建独立博客来深入学习。",
          "通过查阅网络上的文档和教程，确定使用Node.js-Express+Vue+MongoDB的方案来搭建。",
          "利用平时空闲时间进行路由设计，数据结构格式设计，以及各部分编码。UI使用Vue的组件化思想设计，并且使用媒体查询实现一定的自适应。",
          "目前各部分尚在编码过程中，从中逐渐熟悉Vue组件化开发的编码方法以及Node.js的各项特性。"
        ]
      }
    ],
    skill: [
      "熟悉html/css/js;",
      "了解Git的基本命令，使用git bash对本地仓库和远程仓库进行clone，push操作;",
      "能写原生JavaScript DOM代码;",
      "对于JavaScript中的闭包，作用域，原型概念有一定的认知;",
      "会使用Vue.js框架的基本功能"
    ],
    selfEvaluate: [
      "喜欢艺术以及视觉表现，也喜欢编程解决问题，所以我喜欢前端的工作，喜欢用编码的方式去表现艺术和审美，也喜欢在艺术当中穿插技术的成分.",
      "团队协作能力好，服从安排，并能提出自己的想法和意见.",
      "特别希望能够在实习中锻炼自己发现问题和解决问题的能力，希望接触工程化的流程.",
      "善于思考原理，并对此举一反三."
    ],
    internship: [
      {
        time: "2017.7-2017.9",
        corp: "21CN",
        job: [
          "在21CN用户体验中心前端岗位实习",
          "期间使用angular4+TypeScript参与开发公司的内部tw用研系统"
        ]
      }
    ]
  }
]
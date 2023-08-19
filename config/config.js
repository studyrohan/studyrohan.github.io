var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "eddy liu",
    sex: "男",
    age: "28",
    phone: "...",
    email: "eddyliu136@gmail.com",
    address: "china guanghzou",
    log: "studyrohan",
    excpect_work: "C++后端开发",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "马老师：发生甚么事了",
        "我欲将心向明月，奈何明月照沟渠。",
        "春风得意马蹄疾，一日看尽长安花。",
        "蒹葭苍苍，白露为霜；所谓伊人，在水一方。",
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "你好，我是eddy liu,目前从事工业软件行业，哈尔滨工业大学硕士，哈尔滨工程大学本科" +
             "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>你好！我是eddy，目前从事工业软件研发工作</p>" +
        "<p>熟练掌握C++，踩过几年的坑</p>"+
        "<p>Windows，Linux  下都有编码经验</p>"+
        "<p>技术栈：C++，c ,python，QT，sqlite，opengl</p>",



    /** 
    * 在这里配置你的技能点
    * ["技能点", 掌握程度, "技能条颜色"]
    */  
    skills: [
        ["C++", 80, "red"],
        ["python", 77, "blue"],
        ["QT", 75, "#1abc9c"],
        ["opengl", 67, "rgba(0,0,0)"],
        ["sql", 60, "yellow"],
        ["JavaScript", 40, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>操作系统、计算机网络等编程基础知识良好。</li>" +
        "     <li>熟练掌握c++/c。</li>" +
        "     <li>熟练掌握 QT</li>" +
        "     <li>熟练掌握 opengl</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/pro-1.png", "http://1.15.234.109:8000/", "个人博客", "这里记录了我的Java后端学习笔记<br>持续更新"],
        ["./images/pro-2.png", "https://github.com/studyrohan/BSpline_learn", "样条的C++实现", "采用C++编写的样条实现<br>2021/7/23"],
        ["https://pic3.zhimg.com/80/v2-d9766956d5c85c2780e4c5008fd946ca_1440w.jpg", "https://github.com/happysnaker/StudentsManageSystem", "学生管理系统", "C语言+AVL树+多重双向表实现"]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["2023/2/8 — 2023/8/19", "<br>算法工程师",
            "<p><strong>中望软件 几何引擎研发中心</strong></p>" +
            "<p>cad几何内核的研发，基于三角化数据进行模型渲染功能的搭建，开发几何内核应用开发框架，对几何内核功能进行展示</p>"
        
        ],

        ["2020/3/30 — 2021/8/10", "<br>研发工程师",
            "<p><strong>中望软件 一体化研发部</strong></p>" +
            "<p>材料库设计：对材料库进行界面设计，支持进行材料的创建，查看，修改，删除。支持外部材料库导入，格式包括 xml，dat  文件</p>"+
            "<p>ZWSim  内存泄漏检测：利用 Windows  自带的机制，对 ZWSIm  进行内存泄漏检测，同时引入了 vld  对求解器进行内存泄漏检测。</p>"+
            "<p>字符编码项目：梳理所有模块的字符编码情况，整理，引入 boost file system库，包装成新的文件系统。适配所有模块。</p>"+
            "<p>cax  一体化项目：几何渲染，网格渲染，几何建模，几何特征封装，网格数据引用。</p>"
        ]
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2023-08-28", "软件设计师证书", "获取软件设计师资格"],
        ["2021-04-24", "第六届团队程序设计天梯赛个人国家三等奖", ""]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        ["./svg/LeetCode.svg", "https://leetcode.cn/u/ai-di-2366/", "我的力扣主页"],
        ["./svg/github.svg", "https://github.com/studyrohan", "我的GitHub主页"],
        ["./svg/知乎.svg", "https://www.nowcoder.com/users/715538873", "我的牛客主页"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}

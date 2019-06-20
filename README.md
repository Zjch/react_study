### `react路由注意

和vue路由有点区别，地址栏需要加父级的导航 tip：/nav/home

### `axios封装

### `redux

组件发起一个dispatch()将action传到store
store在转发给reducer，reducer进行对应操作，return新的state给store
store把reducer返回的新的state替换掉旧的state
组件在进行store.getState()进行试图更新
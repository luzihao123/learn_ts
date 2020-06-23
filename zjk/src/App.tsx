import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button'
// import Alert, {AlertType} from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
function App() {
  return (
    <div className="App">
      {/* <Alert alertType={AlertType.success} message='标题' description='内日日日日日'/> */}
      <Menu defaultIndex='0' mode='vertical' onSelect={(index)=>alert(index)} defaultOpenSubMenus={['2']}>
        <MenuItem>ccc</MenuItem>
        <MenuItem>bbb</MenuItem>
        <SubMenu title='dddd'>
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
          <MenuItem>3</MenuItem>
        </SubMenu>
      </Menu>
      <Button disabled>Hello</Button>
      <Button className='ccc'>Hello</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Hello</Button>
      <Button btnType={ButtonType.Link} target='_blank' href='http://www.baidu.com' size={ButtonSize.Large}>Large Baidu Link</Button>
      <Button onClick={()=>alert(1)} btnType={ButtonType.Default}>Default</Button>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

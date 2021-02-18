import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button'
import Alert, {AlertType} from './components/Alert/alert'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Tabs from './components/Tabs/tabs'
import TabItem from './components/Tabs/tabItem'
const App:React.FC = () => {
  return (
    <div className="App">
      <Alert alertType={AlertType.danger} message='标题' description='内容' canClose show className="ddd" onClose={()=>console.log('关闭alert')}/>
      <Menu defaultIndex='0' mode='horizontal' onSelect={(index)=>alert(index)} defaultOpenSubMenus={['2']}>
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

      <Tabs defaultIndex='0' onSelect={(i)=>console.log(i)}> 
        <TabItem label='card1'>1</TabItem>
        <TabItem label='card2'>2</TabItem>
        <TabItem label='card3'>3</TabItem>
      </Tabs>
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

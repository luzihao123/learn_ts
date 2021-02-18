import React, { createContext, useState } from 'react'
import classNames from 'classnames'
import {TabItemProps} from './tabItem'

type SelectCallBack = (selectedIndex: string) => void
export interface TabsProps {
    defaultIndex?: string;
    className?: string;
    style?: React.CSSProperties;
    onSelect?: SelectCallBack;
}
interface ITabContext {
    index: string;
    onSelect?: SelectCallBack;
}

export const TabContext = createContext<ITabContext>({ index: '0' })

const Tabs: React.FC<TabsProps> = (props) => {
    const {className, defaultIndex, style, children, onSelect } = props
    const [currentActive, setActive] = useState(defaultIndex)
    const classes = classNames('viking-tabs', className)
    const handleClick = (index: string) => {
        setActive(index)
        if (onSelect) {
            onSelect(index)
        }
    }
    const passedContext: ITabContext = {
        index: currentActive? currentActive: '0',
        onSelect: handleClick
    }
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<TabItemProps>
            const {displayName} = childElement.type
            if (displayName === 'TabItem') {
                return React.cloneElement(childElement, {
                    index: index.toString()
                })
            } else {
                console.log('Wargin: Tabs has a child which is not a TabItem Component')
            }
        })
    }
    return (
        <div className={classes} style={style} data-testid='test-tabs'>
            <TabContext.Provider value={passedContext}>
                {
                    renderChildren()
                }
            </TabContext.Provider>
        </div>
    )
}

Tabs.defaultProps = {
    defaultIndex: '0'
}
export default Tabs
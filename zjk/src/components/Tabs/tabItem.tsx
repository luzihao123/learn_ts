import React, {useContext} from 'react'
import classNames from 'classnames'
import {TabContext} from './tabs'
export interface TabItemProps {
    index?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
    className?: string;
    label: string;
}
const TabItem: React.FC<TabItemProps> = (props) => {
    const {index, disabled, style, children, className, label} = props
    const context = useContext(TabContext)
    const classes = classNames('tab-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index
    })
    const contextClasses = classNames('tab-context', {
        'is-show': context.index === index
    })
    const handleClick = () => {
        if (context.onSelect && !disabled && (typeof index === 'string')) {
            context.onSelect(index)
        }
    }
    return (
        <div className={classes} style={style} onClick={handleClick}>
            {label}
            <div className={contextClasses}>
                {
                    children
                }
            </div>
        </div>
    )
}

TabItem.displayName = 'TabItem'

export default TabItem
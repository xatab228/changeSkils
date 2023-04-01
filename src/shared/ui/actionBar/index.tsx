import {FC} from 'react';
import {Button, ButtonProps} from "antd";

export interface IActionBar {
    items: ButtonProps[]
}

const ActionBar: FC<IActionBar> = ({items}) => {

    return (
        <div className="action-bar">
            {items.map((item,index) =>
                <Button
                    key={index}
                    {...item}
                />
            )}
        </div>
    )
}
export default ActionBar

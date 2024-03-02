import {useState} from "react";

interface ListGroupProps {
    items: string[];
    heading?: string;
    onSelectItem: (item: string, index: number) => void;
}
// function ListGroup({items, heading, onSelectItem}: ListGroupProps) {
const ListGroup = ({items, heading, onSelectItem}: ListGroupProps) => {

    // It is a State
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const handleClick = (index: number): void => {
        setSelectedIndex(index);
    }
    return (
        <>
        {heading && <h2>{heading}</h2>}

            <ul className="list-group">
                {items.length === 0 && <p>There are no items!</p>}
                {items.map((item, index) => <li
                                key={item}
                                className={selectedIndex===index ? 'list-group-item active': 'list-group-item'}
                                onClick={():void => {
                                    handleClick(index)
                                    onSelectItem(item, index)
                                }

                                }
                            >
                                {item}
                            </li>
                )
                }
            </ul>
        </>
    );
}

export default ListGroup;
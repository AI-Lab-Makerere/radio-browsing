import React from 'react';
import { Badge } from 'react-bootstrap';
import { useDrag } from 'react-dnd';

const Tag = ({name, index, id, tag_type, onDropTag}) => {

    const [{ isDragging }, dragRef] = useDrag({
        
        item: {
            type: tag_type,
            index,
            id
        },
        end:  (item, monitor) => {
            const dropResult = monitor.getDropResult()
            const didDrop = monitor.didDrop()

            if (item) {
                onDropTag(item)
            }
            //console.log(dropResult)
            //console.log(didDrop)
            //console.log(item)
        },
        collect: ( monitor ) => ({
            isDragging: monitor.isDragging() 
        })
    })

    return (
        <Badge draggable className="tag" pill bg="secondary" ref={dragRef}>{name}</Badge>
    )

}

export default Tag;
import React, {Component} from 'react';
import {Badge, CloseButton} from 'react-bootstrap';
import Header from './header';

class drag extends Component {
    state = {
        tasks: [
            {name:"Angular",category:"wip"},
            {name:"React", category:"wip"},
            {name:"Vue", category:"wip"},
            {name:"python", category:"wip"},
            {name:"java", category:"wip"},
            {name:"c#", category:"wip"},
            {name:"php", category:"wip"},
            {name:".Net", category:"wip"}
          ]
    }

    onDragStart = (ev, id) => {
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }

    render() {
        var tasks = {
            wip: [],
            complete: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(    
                <Badge draggable className="tag" onDragStart = {(e) => this.onDragStart(e, t.name)} key={t.name} 
                    pill bg="secondary"> {t.name}</Badge>    
            );
        });

        return (
            <div>
                <Header title={<i className="bi-tags-fill"> tags</i>}/>

                <div className="container" style={{marginTop:'100px'}}>
                    <div class="row">
                        <div class="col-lg-6 video-box align-self-baseline" 
                            onDragOver={(e)=>this.onDragOver(e)}
                            onDrop={(e)=>{this.onDrop(e, "wip")}}
                            style={{height:'200px'}}
                            data-aos="fade-right" data-aos-delay="100">
                            <i><h2>Available tags</h2>
                                <p>Drag and drop tags you'd like to base your search on to 'search tags'</p>
                            </i>

                                {tasks.wip}
                        </div>

                        <div class="col-lg-6 pt-3 pt-lg-0 content searchTagDiv"
                            onDragOver={(e)=>this.onDragOver(e)}
                            onDrop={(e)=>this.onDrop(e, "complete")}
                            style={{height:'400px'}}
                            data-aos="fade-left" data-aos-delay="100">
                                <i><h4 className="text-muted">search tags</h4></i>
                                {tasks.complete}

                                <div style={{position:'absolute', bottom:0, right:'6px', fontSize:'2em'}}>
                                    <a href="#" class="twitter"><i class="bi-search"></i></a>
                                </div>    
                        </div>
                    </div>  
                </div>  
            </div>
        );
    }
}

export default drag;
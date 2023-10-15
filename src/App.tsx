/* import { useState } from "react"; */
/* import { invoke } from "@tauri-apps/api/tauri"; */
/* import { */
/*   Popover, */
/*   PopoverContent, */
/*   PopoverTrigger */
/* } from "./Components/UI/Popover"; */
/* import { */
/*   Command, */
/*   CommandEmpty, */
/*   CommandGroup, */
/*   CommandInput, */
/*   CommandItem, */
/*   CommandList */
/* } from "./Components/UI/Command"; */
import {
  /* useState, */
  useCallback
} from 'react';
import ReactFlow, {
  /* Controls, */
  /* Panel, */
  Background,
  /* NodeOrigin, */
  /* FitViewOptions, */
  addEdge,
  /* applyNodeChanges, */
  /* applyEdgeChanges, */
  Node,
  Edge,
  /* OnEdgesChange, */
  /* OnConnect, */
  /* OnNodesChange, */
  /* DefaultEdgeOptions, */
  /* NodeTypes, */
  Connection,
  useNodesState,
  useEdgesState
} from 'reactflow';
import { ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';

import CustomNode from "./CustomNode";
import './temp.css'

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "Node 1" },
    position: { x: 250, y: 5 }
  },
  { id: "2", data: { label: "Node 2" }, position: { x: 100, y: 100 } },
  { id: "3", data: { label: "Node 3" }, position: { x: 400, y: 100 } },
  {
    id: "4",
    type: "custom",
    data: { label: "Custom Node" },
    position: { x: 400, y: 200 }
  }
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3" }
];

const nodeTypes = {
  custom: CustomNode
};

function App() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      gap:'0.5rem',
      height:'calc(100vh - 1rem)',
      /* alignItems:'center', */
    }}
      className="main-container"
    >
      <ReactFlowProvider>
        <ReactFlow
          proOptions={{hideAttribution: true}}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background color="#ccc"/>
          {/* <Controls showInteractive={false} /> */}
          {/* <Panel position="top-left"> */}
          {/*   Carto */}
          {/* </Panel> */}
        </ReactFlow>
      </ReactFlowProvider>
      <div>
        TOOL
      </div>
    </div>
  );
}

export default App;

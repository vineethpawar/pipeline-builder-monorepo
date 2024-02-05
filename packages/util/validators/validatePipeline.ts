import { NodeBlock, NodeError } from "../types";

export const checkPipelineErrors = ({nodes,edges}:{nodes:NodeBlock[],edges?:any}):NodeError => {
  const errors:NodeError["errors"] = [];
  const hightlightNodes:NodeError["hightlightNodes"]= [];
  
  if (nodes.length === 0) {
    errors.push({title:"Pipeline is empty"});
    return {errors,hightlightNodes};
  }

  const handlelessNodes = nodes.filter((node) => !node?.data?.input && !node?.data?.output);
  if(handlelessNodes.length > 0){
    handlelessNodes?.forEach((node) => {
        errors.push({title:node?.id + " doesn't have any input/output handle"});
        hightlightNodes.push({id:node?.id,error:"no Handle"});
    });
    return {errors,hightlightNodes};
  }

  const unconnectedNodes = nodes.filter((node) => !edges?.some((edge:any) => edge?.source === node?.id || edge?.target === node?.id));
    if(unconnectedNodes.length > 0){
        unconnectedNodes?.forEach((node) => {
            errors.push({title:node?.id + " is not connected"});
            hightlightNodes.push({id:node?.id,error:"not connected"});
        });
        return {errors,hightlightNodes};
    }

  return {errors,hightlightNodes};
}
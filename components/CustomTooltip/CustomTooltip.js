//tooltip wrapper
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

const CustomTooltip = ({message, children}) => {
  return (
    
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent >{message}</TooltipContent>
      </Tooltip>
    
  )
}

export default CustomTooltip
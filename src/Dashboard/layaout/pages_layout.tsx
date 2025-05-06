import { Typography } from "@mui/material"
import { Icon } from "@iconify/react"

type Props = {
    pageObject: any
}

export function TextPage({ pageObject }: Props){
    return(
        <Typography color='white' typography='h5' sx={{
            position: 'sticky',
            m: 3, 
            mt: 5,
            cursor: pageObject.page === 0 ? 'default' : 'pointer',
            pl: 8,
            pr: 8,
            pt: 0.5,
            pb: 0.5,
            borderRadius: 10,
            transition: 'all 0.3s ease',
            backgroundColor: pageObject.page === 0 ? 'rgb(45, 119, 255)' : '',
            '&:hover':{
                backgroundColor: 'rgb(45, 119, 255)',

            },
            typography: {
                xs: 'subtitle1', // Small screens (mobile)
                sm: 'h6', // Medium screens (tablet)
                md: 'h5', // Large screens (desktop)
              }
            
        }}>Inicio</Typography>
    )
}


export function IconPage({ pageObject }: Props){
    return(
        <Icon icon="line-md:home-simple-twotone" color='white' style={{
            position: 'sticky',
            width: 35,
            height: 'auto',
            marginTop: '15vh',
            cursor: pageObject.page === 0 ? 'default' : 'pointer',
            padding: 5,
            transition: 'all 0.3s ease',
            backgroundColor: pageObject.page === 0 ? 'rgb(45, 119, 255)' : '',
        }}/>
    )
}
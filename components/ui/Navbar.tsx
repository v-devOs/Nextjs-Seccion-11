import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material"
import { MenuOutlined } from '@mui/icons-material'

export const Navbar = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton
          size="large"
          edge='start'
        >
          <MenuOutlined/>
        </IconButton>

        <Link href="/">
          <Typography variant="h6" color='white'>CookieMaster</Typography>
        </Link>

        <Link href="/theme-changer">
          <Typography variant="h6" color='white'>Cambiar Tema</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

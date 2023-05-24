import { ChangeEvent, FC, useState } from 'react'
import { GetServerSideProps } from 'next'
import { Layout } from '</components/layouts>'
import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import Cookies from 'js-cookie'
import axios from 'axios'

const ThemeChangerChange:FC = ( props ) => {
  
  const [currentTheme, setCurrentTheme] = useState('Light');

  const onThemeChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    const selectedTheme = event.target.value;
    setCurrentTheme( selectedTheme )

    Cookies.set('theme', selectedTheme );
  }

  const onClick = async () => {
    const {data} = await axios.get('/api/hello')

    console.log(data);
    
  }

  return (
    <Layout title='Theme Changer'>

      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup
              value={currentTheme}
              onChange={onThemeChange}
            >
              <FormControlLabel value='Light' control={<Radio/>} label='Light'/>
              <FormControlLabel value='Dark' control={<Radio/>} label='Dark'/>
              <FormControlLabel value='Custom' control={<Radio/>} label='Custom'/>
            </RadioGroup>
          </FormControl>

          <Button
            onClick={onClick}
          >
            Solicitud
          </Button>
        </CardContent>
      </Card>

    </Layout>
    
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  
  const { theme = 'light', name = 'No name'} = req.cookies;
  

  return {
    props: {
      theme,
      name
    }
  }
}
export default ThemeChangerChange;
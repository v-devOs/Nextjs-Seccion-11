import { ChangeEvent, FC, useState } from 'react'
import { GetServerSideProps } from 'next'
import { Layout } from '</components/layouts>'
import { Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import Cookies from 'js-cookie'

const ThemeChangerChange:FC = ( props ) => {
  
  const [currentTheme, setCurrentTheme] = useState('Light');

  const onThemeChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    const selectedTheme = event.target.value;
    setCurrentTheme( selectedTheme )

    Cookies.set('theme', selectedTheme );
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
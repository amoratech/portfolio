import React from 'react'
import {Title, Center, Text, Button} from '@mantine/core'

export default function ProjectComponents() {
  return (
    <div className="w-[300px] h-[330px] rounded-xl bg-[var(--projectComponent)] shadow-2xl">
      <div className='mt-[12px]'>
        <Title><Center>Hello</Center></Title>
        <div>
          
        </div>
        <Text>description here</Text>
      </div>
      <div>
        <Center><Button variant='light'>Learn More</Button></Center>
      </div>

    </div>
  )
}

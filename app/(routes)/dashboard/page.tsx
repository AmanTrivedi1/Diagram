"use client"
import Wrapper from '@/app/_components/Wrapper'
import { Button } from '@/components/ui/button'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'
const Dashboard = () => {
  return (
  <>
    
        <Wrapper>
          <>
            <Button>
                <LogoutLink>Logout</LogoutLink>
            </Button>
          </>
        </Wrapper>
       
  </>
  )
}

export default Dashboard

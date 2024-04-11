import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>
        <Section
            title="Model 3"
            description="Lease starting at $329/mo*"
            backgroundImg="model-3.jpg"
            leftBtn="Explore Inventory"
            rightBtn="Demo Drive"
        />
         <Section
            title="Model X"
            description="From $71,090*
            After Est. Gas Savings"
            backgroundImg="model-x.jpg"
            leftBtn="Explore Inventory"
            rightBtn="Demo Drive"
        />
         <Section
            title="Model S"
            description="Lease starting at $329/mo*"
            backgroundImg="model-s.jpg"
            leftBtn="Explore Inventory"
            rightBtn="Demo Drive"

        />
         <Section
            title="Model Y"
            description="Lease starting at $329/mo*"
            backgroundImg="model-y.jpg"
            leftBtn="Explore Inventory"
            rightBtn="Demo Drive"

        />
        <Section
            backgroundImg="Cybertruck.avif"
            leftBtn="Order Now"
            rightBtn="Learn More"

        />
         <Section
          title="Solar Panels"
          description="Schedule a Virtual Consultation*"
          backgroundImg="solar-panel.jpg"
          leftBtn="Order Now"
          rightBtn="Learn More"

        />
            <Section
          title="Solar Roof"
          description="Produce Clean Energy From Your Roof"
          backgroundImg="solar-roof.jpg"
          leftBtn="Order Now"
          rightBtn="Learn More"
        />
         <Section
          title="Accesories"
        
          backgroundImg="accessories.jpg"
          leftBtn=""
          rightBtn="Shop Now"
        />
        
        
        
    </Container>
  )
}

export default Home

const Container = styled.div`
        height: 100vh;
        background-color: red;  

`
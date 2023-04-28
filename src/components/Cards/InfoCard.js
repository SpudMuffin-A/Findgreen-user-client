import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'

function InfoCard({ title, value, children: icon }) {
  return (
    <Card>
      <CardBody className="flex text-lg items-center bg-black text-white font-bold" >
        {icon}
        <div>
        <p className=" text-2xl font-bold font-medium text-white">{value}</p>
          <p className="text-sm font-semibold text-white">{title}</p>
          
        </div>
      </CardBody>
    </Card>
  )
}

export default InfoCard

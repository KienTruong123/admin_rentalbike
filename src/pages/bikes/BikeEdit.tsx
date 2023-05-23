import { ActionButton } from '@/components'
import _ from 'lodash'
import {  Edit, SimpleForm, TextInput, required } from 'react-admin'

export const BikeEdit = () => {
  const transformData = (data: any) => {
    let value = _.omit(data, ['id', 'imgUrl', 'bikestatusId'])
    value = _.omitBy(value, val => val === null)
    value = { ...value }
    return value
  }

  return (
    <Edit transform={transformData} actions={<ActionButton />}>
      <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput source="name" validate={required()} />
        <TextInput multiline source="description" validate={required()} />
      </SimpleForm>
    </Edit>
  )
}

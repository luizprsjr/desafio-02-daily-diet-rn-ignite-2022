import { useState } from 'react'

import { SectionList } from 'react-native'

import logoImg from '@assets/logo.png'
import { Button } from '@components/Button'
import { Highlight } from '@components/Highlight'
import { ListEmpty } from '@components/ListEmpty'
import { MealItem } from '@components/MealItem'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

import * as S from './styles'

const DATA = [
  {
    title: '12.08.22',
    data: [
      { id: '01', title: 'X-tudo', hour: '20:00', isHealth: false },
      {
        id: '02',
        title: 'Whey protein com leite',
        hour: '16:00',
        isHealth: true
      },
      {
        id: '03',
        title: 'Salada cesar com frango grelhado',
        hour: '12:30',
        isHealth: true
      },
      {
        id: '04',
        title: 'Vitamina de banana com goiaba',
        hour: '09:30',
        isHealth: true
      }
    ]
  },
  {
    title: '11.08.22',
    data: [
      { id: '05', title: 'X-tudo', hour: '20:00', isHealth: false },
      { id: '06', title: 'Sanduíche', hour: '16:00', isHealth: true },
      {
        id: '07',
        title: 'Lasanha de frango com queijo',
        hour: '12:30',
        isHealth: false
      },
      { id: '08', title: 'Torta de chocolate', hour: '09:30', isHealth: false }
    ]
  }
]

export function Home () {
  const [mealsList, setMealsList] = useState<MealStorageDTO[]>(DATA)

  return (
    <S.Container>
      <S.Header>
        <S.Logo source={logoImg} />
        <S.UserImg source={{ uri: 'https://github.com/luiz-p.png' }} />
      </S.Header>

      <S.StatsButton>
        <S.ArrowIcon />
        <Highlight title="90,86%" subtitle="das refeições dentro da dieta" />
      </S.StatsButton>

      <S.Title>Refeições</S.Title>
      <Button title="Nova Refeição" icon="plus" />

      <SectionList
        sections={mealsList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MealItem item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <S.SectionHeader>{title}</S.SectionHeader>
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Registre sua primeira refeição." />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 20 },
          mealsList.length === 0 && { flex: 1 }
        ]}
      />
    </S.Container>
  )
}

export const expenses = [
  {
    id: '1',
    description: 'Groceries',
    amount: 50.0,
    date: '2023-04-01'
  },
  {
    id: '2',
    description: 'Utilities',
    amount: 100.0,
    date: '2023-04-02'
  },
  {
    id: '3',
    description: 'Dinner out',
    amount: 30.0,
    date: '2023-04-03'
  },
  {
    id: '4',
    description: 'Movie tickets',
    amount: 25.0,
    date: '2023-04-04'
  },
  {
    id: '5',
    description: 'Gasoline',
    amount: 40.0,
    date: '2023-04-05'
  },
  {
    id: '6',
    description: 'Books',
    amount: 20.0,
    date: '2023-04-06'
  },
  {
    id: '7',
    description: 'Gym membership',
    amount: 35.0,
    date: '2023-04-07'
  }
].sort((a, b) => new Date(b.date) - new Date(a.date))

export default expenses

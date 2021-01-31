import React from 'react';
import { useDispatch } from 'react-redux';
import Icon from '@components/Icon';

import styles from './SearchBox.module.scss';

function SearchBox() {
  const dispatch = useDispatch()
  const [form, setForm] = React.useState({
    term: '',
    location: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'CHANGE_TERM', term: form.term })
  }

  const handleInputChange = (event) => {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name] : event.target.value
    }))
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input type="text" name="term" value={form.term} placeholder="Search..." onChange={handleInputChange} required />
      <input type="text" name="location" value={form.location} placeholder="Location" onChange={handleInputChange} required />
      <button type="submit">
        <Icon name="search" />
      </button>
    </form>
  )
}

export default SearchBox

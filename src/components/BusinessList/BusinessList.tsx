import { useQuery } from '@apollo/client';
import { SEARCH_BUSINESS } from '../../graphql/search';
import { useSelector } from 'react-redux';
import BusinessItem from '@components/BusinessItem';
import styles from './BusinessList.module.scss';

function BusinessList() {
  const search = useSelector(state => state.search)
  const { loading, error, data } = useQuery(
    SEARCH_BUSINESS, {
      skip: !search?.term || search.term === '',
      variables: {
        term: search.term,
        location: "san francisco",
        offset: 0
      }
    }
  );
  
  if (loading) return <div>Loading...</div>;
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (!data || data?.total === 0) {
    return (
      <p>nueva busqueda</p>
    )
  }
    console.log("🚀 ~ file: BusinessList.tsx ~ line 24 ~ BusinessList ~ data", data)

  return (
    <div className={styles.businessList}>
      {data?.search?.business?.map(item => (
        <BusinessItem key={item.id} data={item} />
      ))}
    </div>
  )
}

export default BusinessList;

import {categories} from '../../data/categoriesData'
import { useStore } from '../../store/useStore'
import './CategoryCard.css'

function CategoryCard() {
  const getCategories = useStore(state => state.categories);
  const setCategories = useStore(state => state.setCategories);

  const handleUserClick = (id) => {
    const categoryObj = {
      id,
      name: categories.find(each => each.id === id)?.name,
    };

    if (!categoryObj.name) return;

    const isPresent = getCategories.some(each => each.id === id);
    if (isPresent) return;

    setCategories([...getCategories, categoryObj]);
  };

  return (
    <section className="category-section">
      <ul className='category-container'>
        {
          categories.map(category => (
            <li 
              key={category.id} 
              style={{'--card-bg': category.bg}}
              onClick={() => handleUserClick(category.id)}
            >
              <h3>{category.name}</h3>
              <img 
                src={category.image} 
                alt={category.alt}
              />
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default CategoryCard
import { useNavigate } from 'react-router-dom'

import { icons } from '../../data/icons'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import { useStore } from '../../store/useStore'
import './Categories.css'

function Categories() {
    const navigate = useNavigate()
    const {WarningIcon, CloseIcon} = icons
    const setCategory = useStore(state => state.setCategories)
    const getCategory = useStore(state => state.categories)
    
    const handleCloseBtn = (id) => {
        const newList = getCategory.filter(each => each.id !== id)
        
        setCategory(newList)
    }

    return (
    <section className='category-section-container'>
        <div className='category-main-container'>
            <div className='user-category-section'>
                <h1>Super App</h1>
                <h2>Choose your entertainment category</h2>

                <ul className='user-category-choices'>
                    {getCategory.map(category => (
                        <li key={category.id}>
                            {category.name}
                            <button 
                                className='close-button'
                                onClick={() => handleCloseBtn(category.id)}
                            >
                                <CloseIcon size={15} color='#085C00' />
                            </button>
                        </li>
                    ))}
                </ul>
                {getCategory.length < 3 &&
                    <div className='warning-container'>
                        <WarningIcon className='warning-icon' size={15} />
                        <p>Minimum 3 categories required</p>
                    </div>
                }
            </div>

            <CategoryCard />
        </div>

        <button 
            className='next-page-btn'
            onClick={() => getCategory.length >= 3 && navigate('/dashboard')}
        >Next Page</button>
    </section>
    )
}

export default Categories
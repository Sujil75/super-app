import { icons } from '../../data/icons'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import './Categories.css'

function Categories() {
    const Warning = icons.warningIcon

    return (
    <section className='category-section-container'>
        <div className='user-category-section'>
            <h1>Super App</h1>
            <h2>Choose your entertainment category</h2>

            <div className='user-category-choices'></div>
            <div className='warning-container'>
                <Warning className='warning-icon' size={15} />
                <p>Minimum 3 categories required</p>
            </div>
        </div>

        <CategoryCard />
    </section>
    )
}

export default Categories
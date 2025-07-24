import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SearchBar.css';
import { faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  placeholder: string;
}

const SearchBar = ({placeholder}: SearchBarProps) => {
  return (
    <div className="search-bar">
      <button className="filter-button">
        <FontAwesomeIcon icon={faSliders} />
      </button>

      <div className="input-group">
        <input type="text" placeholder={placeholder} className="search-input" />
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  )
}

export default SearchBar;
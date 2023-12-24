import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styled from '@emotion/styled';

const StyledImageListItem = styled(ImageListItem)({
    display: 'flex',
    flexDirection: 'row'
});

const StyledImageList = styled(ImageList)({
    flexWrap: 'nowrap',
    display: 'flex',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    marginTop: '0.5rem',
    marginBottom: '0.5rem'
});

export function Gallery({photos}) {
    return(
    <div className='gallery-container'>
      <StyledImageList>
        {photos.map((item, index) => (
          <StyledImageListItem key={index}>
            <img src={item} alt={`picture-${index}`} />
          </StyledImageListItem>
        ))}
      </StyledImageList>
    </div>
    )
}
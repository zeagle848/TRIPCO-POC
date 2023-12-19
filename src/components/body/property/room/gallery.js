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
    paddingLeft: '20px',
    paddingRight: '20px'
});

const itemData = [{img: 'https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAd03250d11659d57fb72529f6ddb8d6c8f9e64c51c48644e9bca97d052a2d045853cf0b8d899133f1ef98ab29e2161c915cb0', title: 'img1'}, {img: 'https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA2bb8f3a9987385fd381a612a2cfaa98cfa93a76444cb08904c1383e31a609af2c830e878c13cbc13c55e1d0526e008015599', title: 'img2'}, {img: 'https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA21b87eef6c6aa8b970763a5407e3ed5fd10c0b8ad695e3ab5726d0679d72c0304bf4162ff48e72ce68a80c84054bcd479932', title: 'img3'}];

export function Gallery() {
    return(
    <div className='gallery-container'>
      <StyledImageList>
        {itemData.map((item) => (
          <StyledImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
          </StyledImageListItem>
        ))}
      </StyledImageList>
    </div>
    )
}
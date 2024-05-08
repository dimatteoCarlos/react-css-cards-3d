//Card3D.tsx
import './card3D.css';
import { dataImg } from './dataImg.ts';

function Card3D() {
  return (
    <>
      <div className='card__3d--section' style={{ display: 'flex' }}>
        <div className='card__3d'>
          <div className='card__3d__wrapper'>
            <img
              src={dataImg[0].imgUrl}
              alt={`${dataImg[0].id}`}
              className='card__3d__cover-image'
            />
          </div>

          <img
            src={dataImg[1].imgUrl}
            alt={`${dataImg[1].id}`}
            className='card__3d__title-image'
          />

          <img
            src={dataImg[2].imgUrl}
            alt={`${dataImg[2].id}`}
            className='card__3d__character-image'
          />
        </div>
        {/* ----------- */}
        <div className='card__3d'>
          <div className='card__3d__wrapper'>
            <img
              src={dataImg[3].imgUrl}
              alt={`${dataImg[3].id}`}
              className='card__3d__cover-image'
            />
          </div>

          <img
            src={dataImg[4].imgUrl}
            alt={`${dataImg[4].id}`}
            className='card__3d__title-image'
          />

          <img
            src={dataImg[5].imgUrl}
            alt={`${dataImg[5].id}`}
            className='card__3d__character-image'
          />
        </div>

        {/* ---------------------- */}

        <div className='card__3d'>
          <div className='card__3d__wrapper'>
            <img
              src={dataImg[6].imgUrl}
              alt={`${dataImg[6].id}`}
              className='card__3d__cover-image card__3d__cover-image--digital'
            />
          </div>

          <img
            src={dataImg[7].imgUrl}
            alt={`${dataImg[7].id}`}
            className='card__3d__title-image'
          />

          <img
            src={dataImg[8].imgUrl}
            alt={`${dataImg[8].id}`}
            className='card__3d__character-image card__3d__character-image--woman'
          />
        </div>
      </div>
    </>
  );
}

export default Card3D;

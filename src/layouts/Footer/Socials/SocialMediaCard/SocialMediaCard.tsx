import React from 'react';
import { FlexWrapper } from '../../../../components/styled-components/FlexWrapper';
import { Icon } from '../../../../components/icon/Icon';

interface ISocialsDataProps {
  socialsData: Array<{ iconId: string }>;
}

export const SocialMediaCard: React.FC<ISocialsDataProps> = ({ socialsData }) => {
  return (
    <FlexWrapper gap="65px" justifyContent="center">
      {socialsData.map((obj, id) => {
        return <Icon key={id} iconId={obj.iconId} />;
      })}
    </FlexWrapper>
  );
};

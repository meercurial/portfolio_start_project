import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/styledComponents/SectionTitle';
import { FlexWrapper } from '../../../components/styledComponents/FlexWrapper';
import { Skill } from './Skill';
import { Container } from '../../../components/styledComponents/Container';
import { skillData, skillDataType } from '../../../database/store';

export const Skills: React.FC = () => {
  return (
    <StyledSkillsSection>
      <Container>
        <SectionTitle display="flex" justifyContent="center">
          Skills
        </SectionTitle>
        <SkillTitle>I have a vast experience in the following web technologies:</SkillTitle>
        <FlexWrapper justifyContent="space-between">
          <Skill skillData={skillData as skillDataType[]} />
          <svg
            width="511.000000"
            height="414.000000"
            viewBox="0 0 511 414"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <desc>Created with Pixso.</desc>
            <defs>
              <clipPath id="clip1_4735">
                <rect
                  id="undraw_project_completed_w0oq 1"
                  width="511.000000"
                  height="414.000000"
                  fill="white"
                  fillOpacity="0"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#clip1_4735)">
              <path
                id="Vector"
                d="M0 384.68L511 384.68L511 385.88L0 385.88L0 384.68Z"
                fill="#343D68"
                fillOpacity="1.000000"
                fillRule="evenodd"
              />
              <path
                id="Vector"
                d="M320.61 179.53C320.61 179.53 297.69 197.68 309.15 201.81C320.61 205.94 327.97 186.96 327.97 186.96L320.61 179.53Z"
                fill="#E9C1A1"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M321.43 172.93L316.51 181.18C316.51 181.18 324.7 181.18 326.34 193.56L332.89 185.31L321.43 172.93Z"
                fill="#CFCCE0"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M430.3 361.07L431.12 385.83L421.29 391.6L417.2 389.13L418.02 361.07L430.3 361.07Z"
                fill="#E9C1A1"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M372.18 354.47L373.81 380.88L350.89 390.78L352.53 376.75C352.53 376.75 359.08 366.02 357.44 354.47L372.18 354.47Z"
                fill="#E9C1A1"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M407.38 155.6C407.38 155.6 420.47 190.26 422.93 211.71C425.39 233.17 429.48 290.11 429.48 290.11L437.66 363.55L414.74 366.85L404.92 292.58L382.82 219.14L377.91 292.58L373.81 359.42L352.53 360.25L350.89 290.93L341.89 202.64L346.8 160.55L407.38 155.6Z"
                fill="#2F2E41"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M419.66 387.48C419.66 387.48 421 373.62 430.97 381.37L432.75 380.05L440.94 398.21C440.94 398.21 450.76 412.23 433.57 413.88C416.38 415.54 418.02 398.21 418.02 398.21L416.38 390.78L417.2 385.92L419.66 387.48Z"
                fill="#2F2E41"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M372.18 370.97C374.19 372.14 375.86 373.82 377.01 375.85C378.17 377.88 378.76 380.19 378.73 382.53C378.73 390.78 377.91 391.6 377.91 391.6L365.63 394.91C365.63 394.91 357.44 394.08 352.53 399.03C347.62 403.98 323.06 407.28 323.06 400.68C323.06 394.08 343.53 383.35 343.53 383.35C343.53 383.35 349.6 373.01 353.93 374.05C358.26 375.1 359.9 376.75 359.9 377.58C359.9 378.4 357.44 384.18 357.44 384.18C357.44 384.18 371.36 380.88 372.18 370.97Z"
                fill="#2F2E41"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M391.01 33.47C391.01 44.86 381.84 54.1 370.54 54.1C359.24 54.1 350.08 44.86 350.08 33.47C350.08 22.08 359.24 12.84 370.54 12.84C381.84 12.84 391.01 22.08 391.01 33.47Z"
                fill="#E9C1A1"
                fillOpacity="1.000000"
                fillRule="evenodd"
              />
              <path
                id="Vector"
                d="M385.68 38.84L394.69 59.46L370.13 94.95C370.13 94.95 368.49 56.16 363.58 49.56C358.67 42.96 385.68 38.84 385.68 38.84Z"
                fill="#E9C1A1"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M374.22 81.75L378.32 71.02L381.59 71.84L385.68 68.54L391.41 50.39L399.6 56.16L410.24 164.26L343.94 165.91L352.94 90.82L361.13 69.37L367.04 61.49L370.95 73.49L374.22 81.75Z"
                fill="#CFCCE0"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M393.05 127.96L395.56 53.31C395.56 53.31 400.42 53.69 402.06 56.16C403.69 58.64 430.71 63.59 430.71 63.59L425.8 140.33C425.8 140.33 446.26 201.4 438.89 204.7C431.53 208 418.43 207.17 418.43 207.17L393.05 127.96Z"
                fill="#575A89"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M353.35 118.47L362.03 68.16L342.71 81.33L347.62 117.64L343.53 142.4C343.53 142.4 327.97 210.89 332.89 213.36C337.8 215.84 343.53 213.36 343.53 213.36L353.35 144.05L353.35 118.47Z"
                fill="#575A89"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M348.44 79.68L342.71 81.33L340.25 114.34L336.16 143.22L316.51 178.71C316.51 178.71 326.34 172.1 330.43 191.08L352.07 153.11L348.44 79.68Z"
                fill="#575A89"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M412.29 172.93C412.29 172.93 389.37 191.08 400.83 195.21C412.29 199.34 419.66 180.36 419.66 180.36L412.29 172.93Z"
                fill="#E9C1A1"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M426.2 182.01L418.84 191.08L409.01 173.75L413.11 166.33L426.2 182.01Z"
                fill="#CFCCE0"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M424.57 66.48L431.12 63.18C431.12 63.18 436.03 69.78 436.85 75.56C437.66 81.33 441.76 88.76 441.76 92.89C441.76 97.01 453.22 135.8 453.22 135.8L427.02 189.43C427.02 189.43 421.29 169.63 409.01 167.98L429.48 139.1L418.02 118.47L424.57 66.48Z"
                fill="#575A89"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M387.67 13.82L391.53 12.26C391.53 12.26 383.46 3.3 372.24 4.08L375.39 0.58C375.39 0.58 367.68 -2.54 360.66 5.64C356.97 9.94 352.7 14.99 350.04 20.68L345.91 20.68L347.63 24.51L341.6 28.34L347.79 27.65C347.42 29.75 347.37 31.89 347.63 34C347.89 36.12 348.96 38.04 350.61 39.38C350.61 39.38 355.4 29.39 355.4 27.83L355.4 31.73C355.4 31.73 359.26 28.22 359.26 25.89L361.36 28.61L362.41 24.33L375.39 28.61L373.29 25.11L381.36 26.27L378.2 21.99C378.2 21.99 387.32 27.05 387.67 31.34C388.02 35.62 390.69 39.68 390.69 39.68C390.69 39.68 397.85 19.66 387.67 13.82Z"
                fill="#2F2E41"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M389.61 30.17C389.61 31.77 388.59 33.06 387.32 33.06C386.06 33.06 385.03 31.77 385.03 30.17C385.03 28.58 386.06 27.28 387.32 27.28C388.59 27.28 389.61 28.58 389.61 30.17Z"
                fill="#E9C1A1"
                fillOpacity="1.000000"
                fillRule="evenodd"
              />
              <path
                id="Vector"
                d="M94.72 170.07L24.05 170.07L24.05 150.11L60.94 150.11L94.72 170.07Z"
                fill="#4F47C8"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M23.86 167.33L23.86 225.65L253.32 225.65L253.32 167.33L23.86 167.33ZM113.35 215.87L38.81 215.87L38.81 207.65L113.35 207.65L113.35 215.87ZM238.38 200.6L38.81 200.6L38.81 192.38L238.38 192.38L238.38 200.6ZM238.38 185.34L38.81 185.34L38.81 177.12L238.38 177.12L238.38 185.34Z"
                fill="#343D68"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M94.72 75.74L24.05 75.74L24.05 55.78L60.94 55.78L94.72 75.74Z"
                fill="#4F47C8"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M23.86 74.18L23.86 132.5L253.32 132.5L253.32 74.18L23.86 74.18ZM113.35 122.71L38.81 122.71L38.81 114.49L113.35 114.49L113.35 122.71ZM156.45 107.45L38.81 107.45L38.81 99.23L156.45 99.23L156.45 107.45ZM238.38 92.18L38.81 92.18L38.81 83.96L238.38 83.96L238.38 92.18Z"
                fill="#343D68"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M94.72 262.44L24.05 262.44L24.05 242.48L60.94 242.48L94.72 262.44Z"
                fill="#4F47C8"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M23.86 258.53L23.86 316.85L253.32 316.85L253.32 258.53L23.86 258.53ZM156.45 307.06L38.81 307.06L38.81 298.84L156.45 298.84L156.45 307.06ZM156.45 291.8L38.81 291.8L38.81 283.58L156.45 283.58L156.45 291.8ZM238.38 276.53L38.81 276.53L38.81 268.31L238.38 268.31L238.38 276.53Z"
                fill="#343D68"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M318.36 119.58L285.74 119.58L285.74 86.7L307.88 86.7L307.88 87.49L286.52 87.49L286.52 118.8L317.58 118.8L317.58 103.14L318.36 103.14L318.36 119.58Z"
                fill="#343D68"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M301.88 111.01C301.13 108.76 291.68 101.14 297.47 99.85L302.22 106.24L324.05 84.23L326.25 86.44L301.88 111.01Z"
                fill="#4F47C8"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M318.36 212.73L285.74 212.73L285.74 179.86L307.88 179.86L307.88 180.64L286.52 180.64L286.52 211.95L317.58 211.95L317.58 196.3L318.36 196.3L318.36 212.73Z"
                fill="#343D68"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M301.88 204.16C301.13 201.92 291.68 194.29 297.47 193.01L302.22 199.39L324.05 177.38L326.25 179.59L301.88 204.16Z"
                fill="#4F47C8"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M318.36 305.5L285.74 305.5L285.74 272.62L307.88 272.62L307.88 273.4L286.52 273.4L286.52 304.71L317.58 304.71L317.58 289.06L318.36 289.06L318.36 305.5Z"
                fill="#343D68"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
              <path
                id="Vector"
                d="M301.88 296.92C301.13 294.68 291.68 287.05 297.47 285.77L302.22 292.15L324.05 270.14L326.25 272.35L301.88 296.92Z"
                fill="#4F47C8"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </g>
          </svg>
        </FlexWrapper>
      </Container>
    </StyledSkillsSection>
  );
};

const SkillTitle: any = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  margin-top: 120px;
  margin-bottom: 50px;
`;

interface IStyledSkillsSection {
  position?: string;
  width?: string;
  height?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  padding?: string;
}

const StyledSkillsSection: any = styled.section<IStyledSkillsSection>``;

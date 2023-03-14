import { SkillsSelectOptions } from '@/data';
import { DEFAULT_USER_FIELDS } from '@/pages';
import React, { ChangeEvent, FC, useState } from 'react';
import { FiCalendar } from 'react-icons/fi';
import Button from '../button/button.component';
import DropdownSelect, {
  SelectOption,
} from '../dropdown-select/dropdown-select.component';
import InputBox from '../Input/input.component';
import Switch from '../switch/switch.component';
import TextAreaBox from '../textarea/textarea.component';

import styles from './ProfileForm.module.scss';

type ProfileFormProps = {
  profile: typeof DEFAULT_USER_FIELDS.profile;
  user: typeof DEFAULT_USER_FIELDS;
  setUser: React.Dispatch<React.SetStateAction<typeof DEFAULT_USER_FIELDS>>;
  handleSubmit: () => void;
};

const ProfileForm: FC<ProfileFormProps> = ({
  profile,
  user,
  setUser,
  handleSubmit,
}) => {
  console.log(user);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setUser({ ...user, profile: { ...user.profile, [name]: value } });
  };

  return (
    <div className={styles.profile_form_container}>
      <div className={styles.profile_image_container}>
        <img
          src="../static/images/profile-picture-1.png"
          alt="profile picture"
        />
        <div className={styles.profile_image_buttons}>
          <Button variant="primary" size="base" name="upload new picture" />
          <Button variant="secondary" size="base" name="delete" />
        </div>
      </div>
      <InputBox
        label="name"
        placeholder="marina budarina"
        showHelperText={true}
        helperText="name entered above will be used for all issued certificates"
        value={profile.name}
        name="name"
        onChange={handleChange}
      />

      <TextAreaBox
        label="About"
        placeholder="write about yourself"
        value={profile.about}
        name="about"
        onChange={handleChange}
      />
      <DropdownSelect
        multiple={true}
        label="skills"
        options={SkillsSelectOptions}
        value={profile.skills}
        onChange={(value) =>
          setUser({ ...user, profile: { ...user.profile, skills: value } })
        }
      />
      <InputBox
        label="profession"
        placeholder="student"
        value={profile.profession}
        name="profession"
        onChange={handleChange}
      />
      <InputBox
        label="Date of birth"
        placeholder="DD/MM/YYYY"
        type="date"
        value={profile.dateOfBirth}
        onChange={handleChange}
        name="dateOfBirth"
      />
      <div className={styles.address}>
        <InputBox
          label="state"
          placeholder="Atlanta"
          value={profile.state}
          name="state"
          onChange={handleChange}
        />
        <InputBox
          label="country"
          placeholder="United States"
          value={profile.country}
          name="country"
          onChange={handleChange}
        />
      </div>

      <div className={styles.profile_visibility_section}>
        <div className={styles.profile_visibility_section_header}>
          <p className={styles.profile_visibility_section_title}>
            section visibilty
          </p>
          <p className={styles.profile_visibility_section_description}>
            select which sections shoule show on your profile section
          </p>
        </div>
        <div className={styles.profile_visibility_options}>
          <div className={styles.profile_visibility_option}>
            <div className={styles.profile_visibility_option_header}>
              <p className={styles.profile_visibility_option_title}>
                Followers and Following
              </p>
              <p className={styles.profile_visibility_option_description}>
                Shows your followers and the users you follow on codedamn
              </p>
            </div>
            <Switch
              type="toggle_switch"
              switchState={profile.followersAndFollowing}
              onClickHandler={() => {
                setUser({
                  ...user,
                  profile: {
                    ...user.profile,
                    followersAndFollowing: !user.profile.followersAndFollowing,
                  },
                });
              }}
            />
          </div>
          <div className={styles.profile_visibility_option}>
            <div className={styles.profile_visibility_option_header}>
              <p className={styles.profile_visibility_option_title}>XP</p>
              <p className={styles.profile_visibility_option_description}>
                Shows the XP you have earned
              </p>
            </div>
            <Switch
              type="toggle_switch"
              switchState={profile.XP}
              onClickHandler={() =>
                setUser({
                  ...user,
                  profile: {
                    ...user.profile,
                    XP: !user.profile.XP,
                  },
                })
              }
            />
          </div>
          <div className={styles.profile_visibility_option}>
            <div className={styles.profile_visibility_option_header}>
              <p className={styles.profile_visibility_option_title}>
                Achievement Badges
              </p>
              <p className={styles.profile_visibility_option_description}>
                Shows your relative percentile and proficiency
              </p>
            </div>
            <Switch
              type="toggle_switch"
              switchState={profile.achievementsBadges}
              onClickHandler={() =>
                setUser({
                  ...user,
                  profile: {
                    ...user.profile,
                    achievementsBadges: !user.profile.achievementsBadges,
                  },
                })
              }
            />
          </div>
        </div>
      </div>
      <div className={styles.submit_buttons}>
        <Button
          name="cancel"
          variant="secondary"
          size="base"
          onClick={() => handleSubmit()}
        />
        <Button
          name="save changes"
          variant="primary"
          size="base"
          onClick={() => handleSubmit()}
        />
      </div>
    </div>
  );
};

export default ProfileForm;

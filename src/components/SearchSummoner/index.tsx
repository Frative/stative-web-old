// region import
import React from 'react'
import {
  Box,
  Autocomplete,
  TextField,
  InputAdornment,
  CircularProgress,
} from '@mui/material'
import { Search } from '@mui/icons-material'

// hooks
import { useSearchStore } from 'hooks'

// modules
import { handleSearch } from './module'
// endregion

function SearchSummoner() {
  const search = useSearchStore()
  // console.log(search)
  return (
    <Box
      sx={{
        minWidth: 300,
      }}
    >
      <Autocomplete
        freeSolo
        disableClearable
        options={search.summoners}
        getOptionLabel={(summoner) => summoner.name}
        onInputChange={handleSearch}
        filterOptions={(x) => x}
        renderOption={(props, option, { selected }) => (
          <li {...props} key={option.summonerId}>
            <img
              src={`/resources/assets/patch/img/profileicon/${option.profileIconId}.png`}
              alt={option.name}
              loading="lazy"
              style={{
                width: 36,
                height: 36,
              }}
            />
            <b>{option.name}</b>
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Summoner name"
            InputProps={{
              ...params.InputProps,
              sx: {
                borderRadius: '9999px',
                padding: 0,
                color: 'secondary.contrastText',
              },
              startAdornment: (
                <InputAdornment
                  sx={{
                    marginRight: 0,
                    marginLeft: 1,
                  }}
                  position="start"
                >
                  <Search />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  sx={{
                    marginRight: 1,
                    marginLeft: 0,
                  }}
                  position="end"
                >
                  <CircularProgress color="primary" size={20} />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </Box>
  )
}

export default SearchSummoner

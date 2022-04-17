// region import
import React from 'react'
import {
  Box,
  Autocomplete,
  TextField,
  InputAdornment,
  CircularProgress,
  Typography,
} from '@mui/material'
import { Search } from '@mui/icons-material'

// components
import { Link } from 'components'

// hooks
import { useSearchStore } from 'hooks'

// utilities
import { regions } from 'utilities'

// modules
import { handleSearch } from './module'
// endregion

function SearchSummoner() {
  const search = useSearchStore()
  return (
    <Box
      sx={{
        minWidth: 300,
      }}
    >
      <Autocomplete
        freeSolo
        disableClearable
        loading={search.summoners.length === 0 && !!search.id}
        options={search.summoners}
        getOptionLabel={(summoner) => summoner.name}
        onInputChange={handleSearch}
        filterOptions={(x) => x}
        renderOption={(props, option, { selected }) => (
          <li {...props} key={option.summonerId}>
            <Link
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
              to={`/summoner/${regions[option.region]}/${option.name}`}
            >
              <img
                src={`/resources/assets/patch/img/profileicon/${option.profileIconId}.png`}
                alt={option.name}
                loading="lazy"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '100%',
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Typography
                  sx={{
                    marginLeft: 1,
                  }}
                >
                  {option.name}
                </Typography>
                <Typography
                  sx={{
                    marginLeft: 1,
                  }}
                >
                  {regions[option.region].toUpperCase()}
                </Typography>
              </Box>
            </Link>
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Summoner name"
            InputProps={{
              ...params.InputProps,
              sx: {
                backgroundColor: 'background.paper',
                borderRadius: '9999px',
                padding: '0px !important',
                color: 'text.primary',
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
                  {search.summoners.length === 0 && !!search.id && (
                    <CircularProgress color="info" size={20} />
                  )}
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

import React, { useReducer, useContext, useEffect } from 'react';
const API_ENDPOINT = `https://tastedive.com/api/similar${process.env.TASTEDIVE_API_KEY}`;
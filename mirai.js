{
	"name": "miraiBot"
	"version": "1.1.2",
	"lockfileVersion": 1,
	"requires": true,
	"dependencies": {
		"@babel/runtime": {
			"version": "7.14.0",
			"resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.14.0.tgz",
			"integrity": "sha512-JELkvo/DlpNdJ7dlyw/eY7E0suy5i5GQH+Vlxaq1nsNJ+H7f4Vtv3jMeCEgRhZZQFXTjldYfQgv2qmM6M1v5wA==",
			"requires": {
				"regenerator-runtime": "^0.13.4"
			}
		},
		"@hapi/hoek": {
			"version": "9.2.0",
			"resolved": "https://registry.npmjs.org/@hapi/hoek/-/hoek-9.2.0.tgz",
			"integrity": "sha512-sqKVVVOe5ivCaXDWivIJYVSaEgdQK9ul7a4Kity5Iw7u9+wBAPbX1RMSnLLmp7O4Vzj0WOWwMAJsTL00xwaNug=="
		},
		"@hapi/topo": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/@hapi/topo/-/topo-5.0.0.tgz",
			"integrity": "sha512-tFJlT47db0kMqVm3H4nQYgn6Pwg10GTZHb1pwmSiv1K4ks6drQOtfEF5ZnPjkvC+y4/bUPHK+bc87QvLcL+WMw==",
			"requires": {
				"@hapi/hoek": "^9.0.0"
			}
		},
		"@jimp/bmp": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/bmp/-/bmp-0.16.1.tgz",
			"integrity": "sha512-iwyNYQeBawrdg/f24x3pQ5rEx+/GwjZcCXd3Kgc+ZUd+Ivia7sIqBsOnDaMZdKCBPlfW364ekexnlOqyVa0NWg==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1",
				"bmp-js": "^0.1.0"
			}
		},
		"@jimp/core": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/core/-/core-0.16.1.tgz",
			"integrity": "sha512-la7kQia31V6kQ4q1kI/uLimu8FXx7imWVajDGtwUG8fzePLWDFJyZl0fdIXVCL1JW2nBcRHidUot6jvlRDi2+g==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1",
				"any-base": "^1.1.0",
				"buffer": "^5.2.0",
				"exif-parser": "^0.1.12",
				"file-type": "^9.0.0",
				"load-bmfont": "^1.3.1",
				"mkdirp": "^0.5.1",
				"phin": "^2.9.1",
				"pixelmatch": "^4.0.2",
				"tinycolor2": "^1.4.1"
			},
			"dependencies": {
				"mkdirp": {
					"version": "0.5.5",
					"resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
					"integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
					"requires": {
						"minimist": "^1.2.5"
					}
				}
			}
		},
		"@jimp/custom": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/custom/-/custom-0.16.1.tgz",
			"integrity": "sha512-DNUAHNSiUI/j9hmbatD6WN/EBIyeq4AO0frl5ETtt51VN1SvE4t4v83ZA/V6ikxEf3hxLju4tQ5Pc3zmZkN/3A==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/core": "^0.16.1"
			}
		},
		"@jimp/gif": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/gif/-/gif-0.16.1.tgz",
			"integrity": "sha512-r/1+GzIW1D5zrP4tNrfW+3y4vqD935WBXSc8X/wm23QTY9aJO9Lw6PEdzpYCEY+SOklIFKaJYUAq/Nvgm/9ryw==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1",
				"gifwrap": "^0.9.2",
				"omggif": "^1.0.9"
			}
		},
		"@jimp/jpeg": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/jpeg/-/jpeg-0.16.1.tgz",
			"integrity": "sha512-8352zrdlCCLFdZ/J+JjBslDvml+fS3Z8gttdml0We759PnnZGqrnPRhkOEOJbNUlE+dD4ckLeIe6NPxlS/7U+w==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1",
				"jpeg-js": "0.4.2"
			}
		},
		"@jimp/plugin-blit": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-blit/-/plugin-blit-0.16.1.tgz",
			"integrity": "sha512-fKFNARm32RoLSokJ8WZXHHH2CGzz6ire2n1Jh6u+XQLhk9TweT1DcLHIXwQMh8oR12KgjbgsMGvrMVlVknmOAg==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-blur": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-blur/-/plugin-blur-0.16.1.tgz",
			"integrity": "sha512-1WhuLGGj9MypFKRcPvmW45ht7nXkOKu+lg3n2VBzIB7r4kKNVchuI59bXaCYQumOLEqVK7JdB4glaDAbCQCLyw==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-circle": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-circle/-/plugin-circle-0.16.1.tgz",
			"integrity": "sha512-JK7yi1CIU7/XL8hdahjcbGA3V7c+F+Iw+mhMQhLEi7Q0tCnZ69YJBTamMiNg3fWPVfMuvWJJKOBRVpwNTuaZRg==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-color": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-color/-/plugin-color-0.16.1.tgz",
			"integrity": "sha512-9yQttBAO5SEFj7S6nJK54f+1BnuBG4c28q+iyzm1JjtnehjqMg6Ljw4gCSDCvoCQ3jBSYHN66pmwTV74SU1B7A==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1",
				"tinycolor2": "^1.4.1"
			}
		},
		"@jimp/plugin-contain": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-contain/-/plugin-contain-0.16.1.tgz",
			"integrity": "sha512-44F3dUIjBDHN+Ym/vEfg+jtjMjAqd2uw9nssN67/n4FdpuZUVs7E7wadKY1RRNuJO+WgcD5aDQcsvurXMETQTg==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-cover": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-cover/-/plugin-cover-0.16.1.tgz",
			"integrity": "sha512-YztWCIldBAVo0zxcQXR+a/uk3/TtYnpKU2CanOPJ7baIuDlWPsG+YE4xTsswZZc12H9Kl7CiziEbDtvF9kwA/Q==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-crop": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-crop/-/plugin-crop-0.16.1.tgz",
			"integrity": "sha512-UQdva9oQzCVadkyo3T5Tv2CUZbf0klm2cD4cWMlASuTOYgaGaFHhT9st+kmfvXjKL8q3STkBu/zUPV6PbuV3ew==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-displace": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-displace/-/plugin-displace-0.16.1.tgz",
			"integrity": "sha512-iVAWuz2+G6Heu8gVZksUz+4hQYpR4R0R/RtBzpWEl8ItBe7O6QjORAkhxzg+WdYLL2A/Yd4ekTpvK0/qW8hTVw==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-dither": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-dither/-/plugin-dither-0.16.1.tgz",
			"integrity": "sha512-tADKVd+HDC9EhJRUDwMvzBXPz4GLoU6s5P7xkVq46tskExYSptgj5713J5Thj3NMgH9Rsqu22jNg1H/7tr3V9Q==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-fisheye": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-fisheye/-/plugin-fisheye-0.16.1.tgz",
			"integrity": "sha512-BWHnc5hVobviTyIRHhIy9VxI1ACf4CeSuCfURB6JZm87YuyvgQh5aX5UDKtOz/3haMHXBLP61ZBxlNpMD8CG4A==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-flip": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-flip/-/plugin-flip-0.16.1.tgz",
			"integrity": "sha512-KdxTf0zErfZ8DyHkImDTnQBuHby+a5YFdoKI/G3GpBl3qxLBvC+PWkS2F/iN3H7wszP7/TKxTEvWL927pypT0w==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-gaussian": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-gaussian/-/plugin-gaussian-0.16.1.tgz",
			"integrity": "sha512-u9n4wjskh3N1mSqketbL6tVcLU2S5TEaFPR40K6TDv4phPLZALi1Of7reUmYpVm8mBDHt1I6kGhuCJiWvzfGyg==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-invert": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-invert/-/plugin-invert-0.16.1.tgz",
			"integrity": "sha512-2DKuyVXANH8WDpW9NG+PYFbehzJfweZszFYyxcaewaPLN0GxvxVLOGOPP1NuUTcHkOdMFbE0nHDuB7f+sYF/2w==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-mask": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-mask/-/plugin-mask-0.16.1.tgz",
			"integrity": "sha512-snfiqHlVuj4bSFS0v96vo2PpqCDMe4JB+O++sMo5jF5mvGcGL6AIeLo8cYqPNpdO6BZpBJ8MY5El0Veckhr39Q==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-normalize": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-normalize/-/plugin-normalize-0.16.1.tgz",
			"integrity": "sha512-dOQfIOvGLKDKXPU8xXWzaUeB0nvkosHw6Xg1WhS1Z5Q0PazByhaxOQkSKgUryNN/H+X7UdbDvlyh/yHf3ITRaw==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-print": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-print/-/plugin-print-0.16.1.tgz",
			"integrity": "sha512-ceWgYN40jbN4cWRxixym+csyVymvrryuKBQ+zoIvN5iE6OyS+2d7Mn4zlNgumSczb9GGyZZESIgVcBDA1ezq0Q==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1",
				"load-bmfont": "^1.4.0"
			}
		},
		"@jimp/plugin-resize": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-resize/-/plugin-resize-0.16.1.tgz",
			"integrity": "sha512-u4JBLdRI7dargC04p2Ha24kofQBk3vhaf0q8FwSYgnCRwxfvh2RxvhJZk9H7Q91JZp6wgjz/SjvEAYjGCEgAwQ==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-rotate": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-rotate/-/plugin-rotate-0.16.1.tgz",
			"integrity": "sha512-ZUU415gDQ0VjYutmVgAYYxC9Og9ixu2jAGMCU54mSMfuIlmohYfwARQmI7h4QB84M76c9hVLdONWjuo+rip/zg==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-scale": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-scale/-/plugin-scale-0.16.1.tgz",
			"integrity": "sha512-jM2QlgThIDIc4rcyughD5O7sOYezxdafg/2Xtd1csfK3z6fba3asxDwthqPZAgitrLgiKBDp6XfzC07Y/CefUw==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-shadow": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-shadow/-/plugin-shadow-0.16.1.tgz",
			"integrity": "sha512-MeD2Is17oKzXLnsphAa1sDstTu6nxscugxAEk3ji0GV1FohCvpHBcec0nAq6/czg4WzqfDts+fcPfC79qWmqrA==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugin-threshold": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugin-threshold/-/plugin-threshold-0.16.1.tgz",
			"integrity": "sha512-iGW8U/wiCSR0+6syrPioVGoSzQFt4Z91SsCRbgNKTAk7D+XQv6OI78jvvYg4o0c2FOlwGhqz147HZV5utoSLxA==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1"
			}
		},
		"@jimp/plugins": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/plugins/-/plugins-0.16.1.tgz",
			"integrity": "sha512-c+lCqa25b+4q6mJZSetlxhMoYuiltyS+ValLzdwK/47+aYsq+kcJNl+TuxIEKf59yr9+5rkbpsPkZHLF/V7FFA==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/plugin-blit": "^0.16.1",
				"@jimp/plugin-blur": "^0.16.1",
				"@jimp/plugin-circle": "^0.16.1",
				"@jimp/plugin-color": "^0.16.1",
				"@jimp/plugin-contain": "^0.16.1",
				"@jimp/plugin-cover": "^0.16.1",
				"@jimp/plugin-crop": "^0.16.1",
				"@jimp/plugin-displace": "^0.16.1",
				"@jimp/plugin-dither": "^0.16.1",
				"@jimp/plugin-fisheye": "^0.16.1",
				"@jimp/plugin-flip": "^0.16.1",
				"@jimp/plugin-gaussian": "^0.16.1",
				"@jimp/plugin-invert": "^0.16.1",
				"@jimp/plugin-mask": "^0.16.1",
				"@jimp/plugin-normalize": "^0.16.1",
				"@jimp/plugin-print": "^0.16.1",
				"@jimp/plugin-resize": "^0.16.1",
				"@jimp/plugin-rotate": "^0.16.1",
				"@jimp/plugin-scale": "^0.16.1",
				"@jimp/plugin-shadow": "^0.16.1",
				"@jimp/plugin-threshold": "^0.16.1",
				"timm": "^1.6.1"
			}
		},
		"@jimp/png": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/png/-/png-0.16.1.tgz",
			"integrity": "sha512-iyWoCxEBTW0OUWWn6SveD4LePW89kO7ZOy5sCfYeDM/oTPLpR8iMIGvZpZUz1b8kvzFr27vPst4E5rJhGjwsdw==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/utils": "^0.16.1",
				"pngjs": "^3.3.3"
			}
		},
		"@jimp/tiff": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/tiff/-/tiff-0.16.1.tgz",
			"integrity": "sha512-3K3+xpJS79RmSkAvFMgqY5dhSB+/sxhwTFA9f4AVHUK0oKW+u6r52Z1L0tMXHnpbAdR9EJ+xaAl2D4x19XShkQ==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"utif": "^2.0.1"
			}
		},
		"@jimp/types": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/types/-/types-0.16.1.tgz",
			"integrity": "sha512-g1w/+NfWqiVW4CaXSJyD28JQqZtm2eyKMWPhBBDCJN9nLCN12/Az0WFF3JUAktzdsEC2KRN2AqB1a2oMZBNgSQ==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/bmp": "^0.16.1",
				"@jimp/gif": "^0.16.1",
				"@jimp/jpeg": "^0.16.1",
				"@jimp/png": "^0.16.1",
				"@jimp/tiff": "^0.16.1",
				"timm": "^1.6.1"
			}
		},
		"@jimp/utils": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/@jimp/utils/-/utils-0.16.1.tgz",
			"integrity": "sha512-8fULQjB0x4LzUSiSYG6ZtQl355sZjxbv8r9PPAuYHzS9sGiSHJQavNqK/nKnpDsVkU88/vRGcE7t3nMU0dEnVw==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"regenerator-runtime": "^0.13.3"
			}
		},
		"@mapbox/node-pre-gyp": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/@mapbox/node-pre-gyp/-/node-pre-gyp-1.0.5.tgz",
			"integrity": "sha512-4srsKPXWlIxp5Vbqz5uLfBN+du2fJChBoYn/f2h991WLdk7jUvcSk/McVLSv/X+xQIPI8eGD5GjrnygdyHnhPA==",
			"requires": {
				"detect-libc": "^1.0.3",
				"https-proxy-agent": "^5.0.0",
				"make-dir": "^3.1.0",
				"node-fetch": "^2.6.1",
				"nopt": "^5.0.0",
				"npmlog": "^4.1.2",
				"rimraf": "^3.0.2",
				"semver": "^7.3.4",
				"tar": "^6.1.0"
			}
		},
		"@opencensus/core": {
			"version": "0.0.9",
			"resolved": "https://registry.npmjs.org/@opencensus/core/-/core-0.0.9.tgz",
			"integrity": "sha512-31Q4VWtbzXpVUd2m9JS6HEaPjlKvNMOiF7lWKNmXF84yUcgfAFL5re7/hjDmdyQbOp32oGc+RFV78jXIldVz6Q==",
			"requires": {
				"continuation-local-storage": "^3.2.1",
				"log-driver": "^1.2.7",
				"semver": "^5.5.0",
				"shimmer": "^1.2.0",
				"uuid": "^3.2.1"
			},
			"dependencies": {
				"semver": {
					"version": "5.7.1",
					"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
					"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
				}
			}
		},
		"@opencensus/propagation-b3": {
			"version": "0.0.8",
			"resolved": "https://registry.npmjs.org/@opencensus/propagation-b3/-/propagation-b3-0.0.8.tgz",
			"integrity": "sha512-PffXX2AL8Sh0VHQ52jJC4u3T0H6wDK6N/4bg7xh4ngMYOIi13aR1kzVvX1sVDBgfGwDOkMbl4c54Xm3tlPx/+A==",
			"requires": {
				"@opencensus/core": "^0.0.8",
				"uuid": "^3.2.1"
			},
			"dependencies": {
				"@opencensus/core": {
					"version": "0.0.8",
					"resolved": "https://registry.npmjs.org/@opencensus/core/-/core-0.0.8.tgz",
					"integrity": "sha512-yUFT59SFhGMYQgX0PhoTR0LBff2BEhPrD9io1jWfF/VDbakRfs6Pq60rjv0Z7iaTav5gQlttJCX2+VPxFWCuoQ==",
					"requires": {
						"continuation-local-storage": "^3.2.1",
						"log-driver": "^1.2.7",
						"semver": "^5.5.0",
						"shimmer": "^1.2.0",
						"uuid": "^3.2.1"
					}
				},
				"semver": {
					"version": "5.7.1",
					"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
					"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
				}
			}
		},
		"@pm2/agent": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/@pm2/agent/-/agent-2.0.0.tgz",
			"integrity": "sha512-W1LvdyF1tGaVU5f/hV8DjpI5joI7MEgXiQMLZnTwZlFwDVP00O9s86571Q8xSiweTcFZFyye0F4wORN/PjSgGA==",
			"requires": {
				"async": "~3.2.0",
				"chalk": "~3.0.0",
				"dayjs": "~1.8.24",
				"debug": "~4.3.1",
				"eventemitter2": "~5.0.1",
				"fast-json-patch": "^3.0.0-1",
				"fclone": "~1.0.11",
				"nssocket": "0.6.0",
				"pm2-axon": "~4.0.1",
				"pm2-axon-rpc": "~0.7.0",
				"proxy-agent": "~4.0.1",
				"semver": "~7.2.0",
				"ws": "~7.4.0"
			},
			"dependencies": {
				"chalk": {
					"version": "3.0.0",
					"resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
					"integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
					"requires": {
						"ansi-styles": "^4.1.0",
						"supports-color": "^7.1.0"
					}
				},
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				},
				"semver": {
					"version": "7.2.3",
					"resolved": "https://registry.npmjs.org/semver/-/semver-7.2.3.tgz",
					"integrity": "sha512-utbW9Z7ZxVvwiIWkdOMLOR9G/NFXh2aRucghkVrEMJWuC++r3lCkBC3LwqBinyHzGMAJxY5tn6VakZGHObq5ig=="
				},
				"ws": {
					"version": "7.4.6",
					"resolved": "https://registry.npmjs.org/ws/-/ws-7.4.6.tgz",
					"integrity": "sha512-YmhHDO4MzaDLB+M9ym/mDA5z0naX8j7SIlT8f8z+I0VtzsRbekxEutHSme7NPS2qE8StCYQNUnfWdXta/Yu85A=="
				}
			}
		},
		"@pm2/io": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/@pm2/io/-/io-5.0.0.tgz",
			"integrity": "sha512-3rToDVJaRoob5Lq8+7Q2TZFruoEkdORxwzFpZaqF4bmH6Bkd7kAbdPrI/z8X6k1Meq5rTtScM7MmDgppH6aLlw==",
			"requires": {
				"@opencensus/core": "0.0.9",
				"@opencensus/propagation-b3": "0.0.8",
				"async": "~2.6.1",
				"debug": "~4.3.1",
				"eventemitter2": "^6.3.1",
				"require-in-the-middle": "^5.0.0",
				"semver": "6.3.0",
				"shimmer": "^1.2.0",
				"signal-exit": "^3.0.3",
				"tslib": "1.9.3"
			},
			"dependencies": {
				"async": {
					"version": "2.6.3",
					"resolved": "https://registry.npmjs.org/async/-/async-2.6.3.tgz",
					"integrity": "sha512-zflvls11DCy+dQWzTW2dzuilv8Z5X/pjfmZOWba6TNIVDm+2UDaJmXSOXlasHKfNBs8oo3M0aT50fDEWfKZjXg==",
					"requires": {
						"lodash": "^4.17.14"
					}
				},
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"eventemitter2": {
					"version": "6.4.4",
					"resolved": "https://registry.npmjs.org/eventemitter2/-/eventemitter2-6.4.4.tgz",
					"integrity": "sha512-HLU3NDY6wARrLCEwyGKRBvuWYyvW6mHYv72SJJAH3iJN3a6eVUvkjFkcxah1bcTgGVBBrFdIopBJPhCQFMLyXw=="
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				},
				"semver": {
					"version": "6.3.0",
					"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
					"integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
				},
				"tslib": {
					"version": "1.9.3",
					"resolved": "https://registry.npmjs.org/tslib/-/tslib-1.9.3.tgz",
					"integrity": "sha512-4krF8scpejhaOgqzBEcGM7yDIEfi0/8+8zDRZhNZZ2kjmHJ4hv3zCbQWxoJGz1iw5U0Jl0nma13xzHXcncMavQ=="
				}
			}
		},
		"@pm2/js-api": {
			"version": "0.6.7",
			"resolved": "https://registry.npmjs.org/@pm2/js-api/-/js-api-0.6.7.tgz",
			"integrity": "sha512-jiJUhbdsK+5C4zhPZNnyA3wRI01dEc6a2GhcQ9qI38DyIk+S+C8iC3fGjcjUbt/viLYKPjlAaE+hcT2/JMQPXw==",
			"requires": {
				"async": "^2.6.3",
				"axios": "^0.21.0",
				"debug": "~4.3.1",
				"eventemitter2": "^6.3.1",
				"ws": "^7.0.0"
			},
			"dependencies": {
				"async": {
					"version": "2.6.3",
					"resolved": "https://registry.npmjs.org/async/-/async-2.6.3.tgz",
					"integrity": "sha512-zflvls11DCy+dQWzTW2dzuilv8Z5X/pjfmZOWba6TNIVDm+2UDaJmXSOXlasHKfNBs8oo3M0aT50fDEWfKZjXg==",
					"requires": {
						"lodash": "^4.17.14"
					}
				},
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"eventemitter2": {
					"version": "6.4.4",
					"resolved": "https://registry.npmjs.org/eventemitter2/-/eventemitter2-6.4.4.tgz",
					"integrity": "sha512-HLU3NDY6wARrLCEwyGKRBvuWYyvW6mHYv72SJJAH3iJN3a6eVUvkjFkcxah1bcTgGVBBrFdIopBJPhCQFMLyXw=="
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				},
				"ws": {
					"version": "7.4.6",
					"resolved": "https://registry.npmjs.org/ws/-/ws-7.4.6.tgz",
					"integrity": "sha512-YmhHDO4MzaDLB+M9ym/mDA5z0naX8j7SIlT8f8z+I0VtzsRbekxEutHSme7NPS2qE8StCYQNUnfWdXta/Yu85A=="
				}
			}
		},
		"@pm2/pm2-version-check": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/@pm2/pm2-version-check/-/pm2-version-check-1.0.4.tgz",
			"integrity": "sha512-SXsM27SGH3yTWKc2fKR4SYNxsmnvuBQ9dd6QHtEWmiZ/VqaOYPAIlS8+vMcn27YLtAEBGvNRSh3TPNvtjZgfqA==",
			"requires": {
				"debug": "^4.3.1"
			},
			"dependencies": {
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				}
			}
		},
		"@sideway/address": {
			"version": "4.1.2",
			"resolved": "https://registry.npmjs.org/@sideway/address/-/address-4.1.2.tgz",
			"integrity": "sha512-idTz8ibqWFrPU8kMirL0CoPH/A29XOzzAzpyN3zQ4kAWnzmNfFmRaoMNN6VI8ske5M73HZyhIaW4OuSFIdM4oA==",
			"requires": {
				"@hapi/hoek": "^9.0.0"
			}
		},
		"@sideway/formula": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/@sideway/formula/-/formula-3.0.0.tgz",
			"integrity": "sha512-vHe7wZ4NOXVfkoRb8T5otiENVlT7a3IAiw7H5M2+GO+9CDgcVUUsX1zalAztCmwyOr2RUTGJdgB+ZvSVqmdHmg=="
		},
		"@sideway/pinpoint": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/@sideway/pinpoint/-/pinpoint-2.0.0.tgz",
			"integrity": "sha512-RNiOoTPkptFtSVzQevY/yWtZwf/RxyVnPy/OcA9HBM3MlGDnBEYL5B41H0MTn0Uec8Hi+2qUtTfG2WWZBmMejQ=="
		},
		"@tootallnate/once": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/@tootallnate/once/-/once-1.1.2.tgz",
			"integrity": "sha512-RbzJvlNzmRq5c3O09UipeuXno4tA1FE6ikOjxZK0tuxVv3412l64l5t1W5pj4+rJq9vpkm/kwiR07aZXnsKPxw=="
		},
		"@types/node": {
			"version": "15.6.0",
			"resolved": "https://registry.npmjs.org/@types/node/-/node-15.6.0.tgz",
			"integrity": "sha512-gCYSfQpy+LYhOFTKAeE8BkyGqaxmlFxe+n4DKM6DR0wzw/HISUE/hAmkC/KT8Sw5PCJblqg062b3z9gucv3k0A=="
		},
		"abab": {
			"version": "2.0.5",
			"resolved": "https://registry.npmjs.org/abab/-/abab-2.0.5.tgz",
			"integrity": "sha512-9IK9EadsbHo6jLWIpxpR6pL0sazTXV6+SQv25ZB+F7Bj9mJNaOc4nCRabwd5M/JwmUa8idz6Eci6eKfJryPs6Q=="
		},
		"abbrev": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
			"integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q=="
		},
		"acorn": {
			"version": "8.2.4",
			"resolved": "https://registry.npmjs.org/acorn/-/acorn-8.2.4.tgz",
			"integrity": "sha512-Ibt84YwBDDA890eDiDCEqcbwvHlBvzzDkU2cGBBDDI1QWT12jTiXIOn2CIw5KK4i6N5Z2HUxwYjzriDyqaqqZg=="
		},
		"acorn-globals": {
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-6.0.0.tgz",
			"integrity": "sha512-ZQl7LOWaF5ePqqcX4hLuv/bLXYQNfNWw2c0/yX/TsPRKamzHcTGQnlCjHT3TsmkOUVEPS3crCxiPfdzE/Trlhg==",
			"requires": {
				"acorn": "^7.1.1",
				"acorn-walk": "^7.1.1"
			},
			"dependencies": {
				"acorn": {
					"version": "7.4.1",
					"resolved": "https://registry.npmjs.org/acorn/-/acorn-7.4.1.tgz",
					"integrity": "sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A=="
				}
			}
		},
		"acorn-walk": {
			"version": "7.2.0",
			"resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-7.2.0.tgz",
			"integrity": "sha512-OPdCF6GsMIP+Az+aWfAAOEt2/+iVDKE7oy6lJ098aoe59oAmK76qV6Gw60SbZ8jHuG2wH058GF4pLFbYamYrVA=="
		},
		"agent-base": {
			"version": "6.0.2",
			"resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
			"integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
			"requires": {
				"debug": "4"
			},
			"dependencies": {
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				}
			}
		},
		"ajv": {
			"version": "6.12.6",
			"resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
			"integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
			"requires": {
				"fast-deep-equal": "^3.1.1",
				"fast-json-stable-stringify": "^2.0.0",
				"json-schema-traverse": "^0.4.1",
				"uri-js": "^4.2.2"
			}
		},
		"amlich": {
			"version": "0.0.2",
			"resolved": "https://registry.npmjs.org/amlich/-/amlich-0.0.2.tgz",
			"integrity": "sha1-43tC3+FH0JFNpDAAHh7BrsGxKkw="
		},
		"amp": {
			"version": "0.3.1",
			"resolved": "https://registry.npmjs.org/amp/-/amp-0.3.1.tgz",
			"integrity": "sha1-at+NWKdPNh6CwfqNOJwHnhOfxH0="
		},
		"amp-message": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/amp-message/-/amp-message-0.1.2.tgz",
			"integrity": "sha1-p48cmJlQh602GSpBKY5NtJ49/EU=",
			"requires": {
				"amp": "0.3.1"
			}
		},
		"ansi": {
			"version": "0.3.1",
			"resolved": "https://registry.npmjs.org/ansi/-/ansi-0.3.1.tgz",
			"integrity": "sha1-DELU+xcWDVqa8eSEus4cZpIsGyE="
		},
		"ansi-colors": {
			"version": "4.1.1",
			"resolved": "https://registry.npmjs.org/ansi-colors/-/ansi-colors-4.1.1.tgz",
			"integrity": "sha512-JoX0apGbHaUJBNl6yF+p6JAFYZ666/hhCGKN5t9QFjbJQKUU/g8MNbFDbvfrgKXvI1QpZplPOnwIo99lX/AAmA=="
		},
		"ansi-regex": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-2.1.1.tgz",
			"integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8="
		},
		"ansi-styles": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
			"integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
			"requires": {
				"color-convert": "^2.0.1"
			}
		},
		"any-base": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/any-base/-/any-base-1.1.0.tgz",
			"integrity": "sha512-uMgjozySS8adZZYePpaWs8cxB9/kdzmpX6SgJZ+wbz1K5eYk5QMYDVJaZKhxyIHUdnnJkfR7SVgStgH7LkGUyg=="
		},
		"any-promise": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz",
			"integrity": "sha1-q8av7tzqUugJzcA3au0845Y10X8="
		},
		"anymatch": {
			"version": "3.1.2",
			"resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz",
			"integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",
			"requires": {
				"normalize-path": "^3.0.0",
				"picomatch": "^2.0.4"
			}
		},
		"aproba": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/aproba/-/aproba-1.2.0.tgz",
			"integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw=="
		},
		"archiver": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/archiver/-/archiver-3.1.1.tgz",
			"integrity": "sha512-5Hxxcig7gw5Jod/8Gq0OneVgLYET+oNHcxgWItq4TbhOzRLKNAFUb9edAftiMKXvXfCB0vbGrJdZDNq0dWMsxg==",
			"requires": {
				"archiver-utils": "^2.1.0",
				"async": "^2.6.3",
				"buffer-crc32": "^0.2.1",
				"glob": "^7.1.4",
				"readable-stream": "^3.4.0",
				"tar-stream": "^2.1.0",
				"zip-stream": "^2.1.2"
			},
			"dependencies": {
				"async": {
					"version": "2.6.3",
					"resolved": "https://registry.npmjs.org/async/-/async-2.6.3.tgz",
					"integrity": "sha512-zflvls11DCy+dQWzTW2dzuilv8Z5X/pjfmZOWba6TNIVDm+2UDaJmXSOXlasHKfNBs8oo3M0aT50fDEWfKZjXg==",
					"requires": {
						"lodash": "^4.17.14"
					}
				},
				"readable-stream": {
					"version": "3.6.0",
					"resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
					"integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
					"requires": {
						"inherits": "^2.0.3",
						"string_decoder": "^1.1.1",
						"util-deprecate": "^1.0.1"
					}
				}
			}
		},
		"archiver-utils": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/archiver-utils/-/archiver-utils-2.1.0.tgz",
			"integrity": "sha512-bEL/yUb/fNNiNTuUz979Z0Yg5L+LzLxGJz8x79lYmR54fmTIb6ob/hNQgkQnIUDWIFjZVQwl9Xs356I6BAMHfw==",
			"requires": {
				"glob": "^7.1.4",
				"graceful-fs": "^4.2.0",
				"lazystream": "^1.0.0",
				"lodash.defaults": "^4.2.0",
				"lodash.difference": "^4.5.0",
				"lodash.flatten": "^4.4.0",
				"lodash.isplainobject": "^4.0.6",
				"lodash.union": "^4.6.0",
				"normalize-path": "^3.0.0",
				"readable-stream": "^2.0.0"
			}
		},
		"are-we-there-yet": {
			"version": "1.1.5",
			"resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-1.1.5.tgz",
			"integrity": "sha512-5hYdAkZlcG8tOLujVDTgCT+uPX0VnpAH28gWsLfzpXYm7wP6mp5Q/gYyR7YQ0cKVJcXJnl3j2kpBan13PtQf6w==",
			"requires": {
				"delegates": "^1.0.0",
				"readable-stream": "^2.0.6"
			}
		},
		"argparse": {
			"version": "1.0.10",
			"resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
			"integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
			"requires": {
				"sprintf-js": "~1.0.2"
			}
		},
		"asn1": {
			"version": "0.2.4",
			"resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.4.tgz",
			"integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
			"requires": {
				"safer-buffer": "~2.1.0"
			}
		},
		"assert-plus": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
			"integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU="
		},
		"ast-types": {
			"version": "0.13.4",
			"resolved": "https://registry.npmjs.org/ast-types/-/ast-types-0.13.4.tgz",
			"integrity": "sha512-x1FCFnFifvYDDzTaLII71vG5uvDwgtmDTEVWAxrgeiR8VjMONcCXJx7E+USjDtHlwFmt9MysbqgF9b9Vjr6w+w==",
			"requires": {
				"tslib": "^2.0.1"
			}
		},
		"async": {
			"version": "3.2.0",
			"resolved": "https://registry.npmjs.org/async/-/async-3.2.0.tgz",
			"integrity": "sha512-TR2mEZFVOj2pLStYxLht7TyfuRzaydfpxr3k9RpHIzMgw7A64dzsdqCxH1WJyQdoe8T10nDXd9wnEigmiuHIZw=="
		},
		"async-limiter": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/async-limiter/-/async-limiter-1.0.1.tgz",
			"integrity": "sha512-csOlWGAcRFJaI6m+F2WKdnMKr4HhdhFVBk0H/QbJFMCr+uO2kwohwXQPxw/9OCxp05r5ghVBFSyioixx3gfkNQ=="
		},
		"async-listener": {
			"version": "0.6.10",
			"resolved": "https://registry.npmjs.org/async-listener/-/async-listener-0.6.10.tgz",
			"integrity": "sha512-gpuo6xOyF4D5DE5WvyqZdPA3NGhiT6Qf07l7DCB0wwDEsLvDIbCr6j9S5aj5Ch96dLace5tXVzWBZkxU/c5ohw==",
			"requires": {
				"semver": "^5.3.0",
				"shimmer": "^1.1.0"
			},
			"dependencies": {
				"semver": {
					"version": "5.7.1",
					"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
					"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
				}
			}
		},
		"asynckit": {
			"version": "0.4.0",
			"resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
			"integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k="
		},
		"aws-sign2": {
			"version": "0.7.0",
			"resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
			"integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg="
		},
		"aws4": {
			"version": "1.11.0",
			"resolved": "https://registry.npmjs.org/aws4/-/aws4-1.11.0.tgz",
			"integrity": "sha512-xh1Rl34h6Fi1DC2WWKfxUTVqRsNnr6LsKz2+hfwDxQJWmrx8+c7ylaqBMcHfl1U1r2dsifOvKX3LQuLNZ+XSvA=="
		},
		"axios": {
			"version": "0.21.1",
			"resolved": "https://registry.npmjs.org/axios/-/axios-0.21.1.tgz",
			"integrity": "sha512-dKQiRHxGD9PPRIUNIWvZhPTPpl1rf/OxTYKsqKUDjBwYylTvV7SjSHJb9ratfyzM6wCdLCOYLzs73qpg5c4iGA==",
			"requires": {
				"follow-redirects": "^1.10.0"
			}
		},
		"balanced-match": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
			"integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
		},
		"base64-js": {
			"version": "1.5.1",
			"resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
			"integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA=="
		},
		"bcrypt-pbkdf": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
			"integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
			"requires": {
				"tweetnacl": "^0.14.3"
			}
		},
		"bent": {
			"version": "7.3.12",
			"resolved": "https://registry.npmjs.org/bent/-/bent-7.3.12.tgz",
			"integrity": "sha512-T3yrKnVGB63zRuoco/7Ybl7BwwGZR0lceoVG5XmQyMIH9s19SV5m+a8qam4if0zQuAmOQTyPTPmsQBdAorGK3w==",
			"requires": {
				"bytesish": "^0.4.1",
				"caseless": "~0.12.0",
				"is-stream": "^2.0.0"
			}
		},
		"binary-extensions": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
			"integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA=="
		},
		"bitly": {
			"version": "7.1.2",
			"resolved": "https://registry.npmjs.org/bitly/-/bitly-7.1.2.tgz",
			"integrity": "sha512-DWjsnJ7vaQ6PbTZtuYXwDFeJQfqoN7GIbALo6vVfrPc2tp1jWPzn9QVZI1OxwDK6kSwfg5lTvsYu6yvg+3HSUw==",
			"requires": {
				"axios": "^0.21.1",
				"valid-url": "^1.0.9"
			}
		},
		"bl": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
			"integrity": "sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==",
			"requires": {
				"buffer": "^5.5.0",
				"inherits": "^2.0.4",
				"readable-stream": "^3.4.0"
			},
			"dependencies": {
				"inherits": {
					"version": "2.0.4",
					"resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
					"integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
				},
				"readable-stream": {
					"version": "3.6.0",
					"resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
					"integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
					"requires": {
						"inherits": "^2.0.3",
						"string_decoder": "^1.1.1",
						"util-deprecate": "^1.0.1"
					}
				}
			}
		},
		"blessed": {
			"version": "0.1.81",
			"resolved": "https://registry.npmjs.org/blessed/-/blessed-0.1.81.tgz",
			"integrity": "sha1-+WLWh+wsNpVwrnGvhDJW5tDKESk="
		},
		"block-stream": {
			"version": "0.0.9",
			"resolved": "https://registry.npmjs.org/block-stream/-/block-stream-0.0.9.tgz",
			"integrity": "sha1-E+v+d4oDIFz+A3UUgeu0szAMEmo=",
			"optional": true,
			"requires": {
				"inherits": "~2.0.0"
			}
		},
		"bluebird": {
			"version": "2.11.0",
			"resolved": "https://registry.npmjs.org/bluebird/-/bluebird-2.11.0.tgz",
			"integrity": "sha1-U0uQM8AiyVecVro7Plpcqvu2UOE="
		},
		"bmp-js": {
			"version": "0.1.0",
			"resolved": "https://registry.npmjs.org/bmp-js/-/bmp-js-0.1.0.tgz",
			"integrity": "sha1-4Fpj95amwf8l9Hcex62twUjAcjM="
		},
		"bodec": {
			"version": "0.1.0",
			"resolved": "https://registry.npmjs.org/bodec/-/bodec-0.1.0.tgz",
			"integrity": "sha1-vIUVVUMPI8n3ZQp172TGqUw0GMw="
		},
		"body-parser": {
			"version": "1.19.0",
			"resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.0.tgz",
			"integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
			"requires": {
				"bytes": "3.1.0",
				"content-type": "~1.0.4",
				"debug": "2.6.9",
				"depd": "~1.1.2",
				"http-errors": "1.7.2",
				"iconv-lite": "0.4.24",
				"on-finished": "~2.3.0",
				"qs": "6.7.0",
				"raw-body": "2.4.0",
				"type-is": "~1.6.17"
			}
		},
		"boolbase": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
			"integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24="
		},
		"boolean": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/boolean/-/boolean-3.1.0.tgz",
			"integrity": "sha512-K6r5tvO1ykeYerI7jIyTvSFw2l6D6DzqkljGj2E2uyYAAdDo2SV4qGJIV75cHIQpTFyb6BB0BEHiDdDrFsNI+g=="
		},
		"brace-expansion": {
			"version": "1.1.11",
			"resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
			"integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
			"requires": {
				"balanced-match": "^1.0.0",
				"concat-map": "0.0.1"
			}
		},
		"braces": {
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
			"integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
			"requires": {
				"fill-range": "^7.0.1"
			}
		},
		"browser-process-hrtime": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz",
			"integrity": "sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow=="
		},
		"buffer": {
			"version": "5.7.1",
			"resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
			"integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
			"requires": {
				"base64-js": "^1.3.1",
				"ieee754": "^1.1.13"
			}
		},
		"buffer-alloc": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/buffer-alloc/-/buffer-alloc-1.2.0.tgz",
			"integrity": "sha512-CFsHQgjtW1UChdXgbyJGtnm+O/uLQeZdtbDo8mfUgYXCHSM1wgrVxXm6bSyrUuErEb+4sYVGCzASBRot7zyrow==",
			"requires": {
				"buffer-alloc-unsafe": "^1.1.0",
				"buffer-fill": "^1.0.0"
			}
		},
		"buffer-alloc-unsafe": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/buffer-alloc-unsafe/-/buffer-alloc-unsafe-1.1.0.tgz",
			"integrity": "sha512-TEM2iMIEQdJ2yjPJoSIsldnleVaAk1oW3DBVUykyOLsEsFmEc9kn+SFFPz+gl54KQNxlDnAwCXosOS9Okx2xAg=="
		},
		"buffer-crc32": {
			"version": "0.2.13",
			"resolved": "https://registry.npmjs.org/buffer-crc32/-/buffer-crc32-0.2.13.tgz",
			"integrity": "sha1-DTM+PwDqxQqhRUq9MO+MKl2ackI="
		},
		"buffer-equal": {
			"version": "0.0.1",
			"resolved": "https://registry.npmjs.org/buffer-equal/-/buffer-equal-0.0.1.tgz",
			"integrity": "sha1-kbx0sR6kBbyRa8aqkI+q+ltKrEs="
		},
		"buffer-fill": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/buffer-fill/-/buffer-fill-1.0.0.tgz",
			"integrity": "sha1-+PeLdniYiO858gXNY39o5wISKyw="
		},
		"buffer-from": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.1.tgz",
			"integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A=="
		},
		"bytes": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.0.tgz",
			"integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg=="
		},
		"bytesish": {
			"version": "0.4.4",
			"resolved": "https://registry.npmjs.org/bytesish/-/bytesish-0.4.4.tgz",
			"integrity": "sha512-i4uu6M4zuMUiyfZN4RU2+i9+peJh//pXhd9x1oSe1LBkZ3LEbCoygu8W0bXTukU1Jme2txKuotpCZRaC3FLxcQ=="
		},
		"caesar-salad": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/caesar-salad/-/caesar-salad-2.1.0.tgz",
			"integrity": "sha512-ul2EGpFSv9ftddddOo/2PkzTlbEFbdgBtc7ESpEend/Kf26/eG2e25vUuG9TL4nc+lZgnSMnc4SRgE1o7086DQ==",
			"requires": {
				"char-buffer": "^1.0.0||^2.0.0"
			}
		},
		"callback-stream": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/callback-stream/-/callback-stream-1.1.0.tgz",
			"integrity": "sha1-RwGlEmbwbgbqpx/BcjOCLYdfSQg=",
			"requires": {
				"inherits": "^2.0.1",
				"readable-stream": "> 1.0.0 < 3.0.0"
			}
		},
		"camelcase": {
			"version": "5.3.1",
			"resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
			"integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg=="
		},
		"canvas": {
			"version": "2.8.0",
			"resolved": "https://registry.npmjs.org/canvas/-/canvas-2.8.0.tgz",
			"integrity": "sha512-gLTi17X8WY9Cf5GZ2Yns8T5lfBOcGgFehDFb+JQwDqdOoBOcECS9ZWMEAqMSVcMYwXD659J8NyzjRY/2aE+C2Q==",
			"requires": {
				"@mapbox/node-pre-gyp": "^1.0.0",
				"nan": "^2.14.0",
				"simple-get": "^3.0.3"
			}
		},
		"caseless": {
			"version": "0.12.0",
			"resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
			"integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw="
		},
		"chalk": {
			"version": "4.1.1",
			"resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.1.tgz",
			"integrity": "sha512-diHzdDKxcU+bAsUboHLPEDQiw0qEe0qd7SYUn3HgcFlWgbDcfLGswOHYeGrHKzG9z6UYf01d9VFMfZxPM1xZSg==",
			"requires": {
				"ansi-styles": "^4.1.0",
				"supports-color": "^7.1.0"
			}
		},
		"char-buffer": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/char-buffer/-/char-buffer-2.0.0.tgz",
			"integrity": "sha512-VhQ0Lv1guSq/VfUM2nmEQiqLyD/bPtGh0zAMNqP9fjnI1wNbOU1Bv1xEh0tEdxhieatZfmaCw08lhzNEyeHpkQ=="
		},
		"charm": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/charm/-/charm-0.1.2.tgz",
			"integrity": "sha1-BsIe7RobBq62dVPNxT4jJ0usIpY="
		},
		"cheerio": {
			"version": "0.22.0",
			"resolved": "https://registry.npmjs.org/cheerio/-/cheerio-0.22.0.tgz",
			"integrity": "sha1-qbqoYKP5tZWmuBsahocxIe06Jp4=",
			"requires": {
				"css-select": "~1.2.0",
				"dom-serializer": "~0.1.0",
				"entities": "~1.1.1",
				"htmlparser2": "^3.9.1",
				"lodash.assignin": "^4.0.9",
				"lodash.bind": "^4.1.4",
				"lodash.defaults": "^4.0.1",
				"lodash.filter": "^4.4.0",
				"lodash.flatten": "^4.2.0",
				"lodash.foreach": "^4.3.0",
				"lodash.map": "^4.4.0",
				"lodash.merge": "^4.4.0",
				"lodash.pick": "^4.2.1",
				"lodash.reduce": "^4.4.0",
				"lodash.reject": "^4.4.0",
				"lodash.some": "^4.4.0"
			}
		},
		"chem-eb": {
			"version": "0.1.11",
			"resolved": "https://registry.npmjs.org/chem-eb/-/chem-eb-0.1.11.tgz",
			"integrity": "sha512-+sskKbpRNQBipDDjsJEFZ1G0/LlvgX+V20g+OftB30ZtITnAirszJ/MRyluBZf53z2SeIWxnNqdO646VEjnDwg==",
			"requires": {
				"meeko": "*"
			}
		},
		"child_process": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/child_process/-/child_process-1.0.2.tgz",
			"integrity": "sha1-sffn/HPSXn/R1FWtyU4UODAYK1o="
		},
		"chokidar": {
			"version": "3.5.1",
			"resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.1.tgz",
			"integrity": "sha512-9+s+Od+W0VJJzawDma/gvBNQqkTiqYTWLuZoyAsivsI4AaWTCzHG06/TMjsf1cYe9Cb97UCEhjz7HvnPk2p/tw==",
			"requires": {
				"anymatch": "~3.1.1",
				"braces": "~3.0.2",
				"fsevents": "~2.3.1",
				"glob-parent": "~5.1.0",
				"is-binary-path": "~2.1.0",
				"is-glob": "~4.0.1",
				"normalize-path": "~3.0.0",
				"readdirp": "~3.5.0"
			},
			"dependencies": {
				"glob-parent": {
					"version": "5.1.2",
					"resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
					"integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
					"requires": {
						"is-glob": "^4.0.1"
					}
				},
				"is-glob": {
					"version": "4.0.1",
					"resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.1.tgz",
					"integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
					"requires": {
						"is-extglob": "^2.1.1"
					}
				}
			}
		},
		"chownr": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/chownr/-/chownr-2.0.0.tgz",
			"integrity": "sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ=="
		},
		"cli-cursor": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
			"integrity": "sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==",
			"requires": {
				"restore-cursor": "^3.1.0"
			}
		},
		"cli-spinners": {
			"version": "2.6.0",
			"resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.6.0.tgz",
			"integrity": "sha512-t+4/y50K/+4xcCRosKkA7W4gTr1MySvLV0q+PxmG7FJ5g+66ChKurYjxBCjHggHH3HA5Hh9cy+lcUGWDqVH+4Q=="
		},
		"cli-tableau": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/cli-tableau/-/cli-tableau-2.0.1.tgz",
			"integrity": "sha512-he+WTicka9cl0Fg/y+YyxcN6/bfQ/1O3QmgxRXDhABKqLzvoOSM4fMzp39uMyLBulAFuywD2N7UaoQE7WaADxQ==",
			"requires": {
				"chalk": "3.0.0"
			},
			"dependencies": {
				"chalk": {
					"version": "3.0.0",
					"resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
					"integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
					"requires": {
						"ansi-styles": "^4.1.0",
						"supports-color": "^7.1.0"
					}
				}
			}
		},
		"cliui": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/cliui/-/cliui-5.0.0.tgz",
			"integrity": "sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==",
			"requires": {
				"string-width": "^3.1.0",
				"strip-ansi": "^5.2.0",
				"wrap-ansi": "^5.1.0"
			},
			"dependencies": {
				"ansi-regex": {
					"version": "4.1.0",
					"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
					"integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
				},
				"is-fullwidth-code-point": {
					"version": "2.0.0",
					"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
					"integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
				},
				"string-width": {
					"version": "3.1.0",
					"resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
					"integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
					"requires": {
						"emoji-regex": "^7.0.1",
						"is-fullwidth-code-point": "^2.0.0",
						"strip-ansi": "^5.1.0"
					}
				},
				"strip-ansi": {
					"version": "5.2.0",
					"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
					"integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
					"requires": {
						"ansi-regex": "^4.1.0"
					}
				}
			}
		},
		"clone": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
			"integrity": "sha1-2jCcwmPfFZlMaIypAheco8fNfH4="
		},
		"code-point-at": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/code-point-at/-/code-point-at-1.1.0.tgz",
			"integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c="
		},
		"color-convert": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
			"integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
			"requires": {
				"color-name": "~1.1.4"
			}
		},
		"color-name": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
			"integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
		},
		"combined-stream": {
			"version": "1.0.8",
			"resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
			"integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
			"requires": {
				"delayed-stream": "~1.0.0"
			}
		},
		"commander": {
			"version": "2.15.1",
			"resolved": "https://registry.npmjs.org/commander/-/commander-2.15.1.tgz",
			"integrity": "sha512-VlfT9F3V0v+jr4yxPc5gg9s62/fIVWsd2Bk2iD435um1NlGMYdVCq+MjcXnhYq2icNOizHr1kK+5TI6H0Hy0ag=="
		},
		"commist": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/commist/-/commist-1.1.0.tgz",
			"integrity": "sha512-rraC8NXWOEjhADbZe9QBNzLAN5Q3fsTPQtBV+fEVj6xKIgDgNiEVE6ZNfHpZOqfQ21YUzfVNUXLOEZquYvQPPg==",
			"requires": {
				"leven": "^2.1.0",
				"minimist": "^1.1.0"
			}
		},
		"compress-commons": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/compress-commons/-/compress-commons-2.1.1.tgz",
			"integrity": "sha512-eVw6n7CnEMFzc3duyFVrQEuY1BlHR3rYsSztyG32ibGMW722i3C6IizEGMFmfMU+A+fALvBIwxN3czffTcdA+Q==",
			"requires": {
				"buffer-crc32": "^0.2.13",
				"crc32-stream": "^3.0.1",
				"normalize-path": "^3.0.0",
				"readable-stream": "^2.3.6"
			}
		},
		"concat-map": {
			"version": "0.0.1",
			"resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
			"integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
		},
		"concat-stream": {
			"version": "1.6.2",
			"resolved": "https://registry.npmjs.org/concat-stream/-/concat-stream-1.6.2.tgz",
			"integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
			"requires": {
				"buffer-from": "^1.0.0",
				"inherits": "^2.0.3",
				"readable-stream": "^2.2.2",
				"typedarray": "^0.0.6"
			}
		},
		"console-control-strings": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",
			"integrity": "sha1-PXz0Rk22RG6mRL9LOVB/mFEAjo4="
		},
		"content-type": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
			"integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
		},
		"continuation-local-storage": {
			"version": "3.2.1",
			"resolved": "https://registry.npmjs.org/continuation-local-storage/-/continuation-local-storage-3.2.1.tgz",
			"integrity": "sha512-jx44cconVqkCEEyLSKWwkvUXwO561jXMa3LPjTPsm5QR22PA0/mhe33FT4Xb5y74JDvt/Cq+5lm8S8rskLv9ZA==",
			"requires": {
				"async-listener": "^0.6.0",
				"emitter-listener": "^1.1.1"
			}
		},
		"core-util-is": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
			"integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
		},
		"crc": {
			"version": "3.8.0",
			"resolved": "https://registry.npmjs.org/crc/-/crc-3.8.0.tgz",
			"integrity": "sha512-iX3mfgcTMIq3ZKLIsVFAbv7+Mc10kxabAGQb8HvjA1o3T1PIYprbakQ65d3I+2HGHt6nSKkM9PYjgoJO2KcFBQ==",
			"requires": {
				"buffer": "^5.1.0"
			}
		},
		"crc32-stream": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/crc32-stream/-/crc32-stream-3.0.1.tgz",
			"integrity": "sha512-mctvpXlbzsvK+6z8kJwSJ5crm7yBwrQMTybJzMw1O4lLGJqjlDCXY2Zw7KheiA6XBEcBmfLx1D88mjRGVJtY9w==",
			"requires": {
				"crc": "^3.4.4",
				"readable-stream": "^3.4.0"
			},
			"dependencies": {
				"readable-stream": {
					"version": "3.6.0",
					"resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
					"integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
					"requires": {
						"inherits": "^2.0.3",
						"string_decoder": "^1.1.1",
						"util-deprecate": "^1.0.1"
					}
				}
			}
		},
		"cron": {
			"version": "1.8.2",
			"resolved": "https://registry.npmjs.org/cron/-/cron-1.8.2.tgz",
			"integrity": "sha512-Gk2c4y6xKEO8FSAUTklqtfSr7oTq0CiPQeLBG5Fl0qoXpZyMcj1SG59YL+hqq04bu6/IuEA7lMkYDAplQNKkyg==",
			"requires": {
				"moment-timezone": "^0.5.x"
			}
		},
		"cross-fetch": {
			"version": "3.1.4",
			"resolved": "https://registry.npmjs.org/cross-fetch/-/cross-fetch-3.1.4.tgz",
			"integrity": "sha512-1eAtFWdIubi6T4XPy6ei9iUFoKpUkIF971QLN8lIvvvwueI65+Nw5haMNKUwfJxabqlIIDODJKGrQ66gxC0PbQ==",
			"requires": {
				"node-fetch": "2.6.1"
			}
		},
		"css-select": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/css-select/-/css-select-1.2.0.tgz",
			"integrity": "sha1-KzoRBTnFNV8c2NMUYj6HCxIeyFg=",
			"requires": {
				"boolbase": "~1.0.0",
				"css-what": "2.1",
				"domutils": "1.5.1",
				"nth-check": "~1.0.1"
			}
		},
		"css-what": {
			"version": "2.1.3",
			"resolved": "https://registry.npmjs.org/css-what/-/css-what-2.1.3.tgz",
			"integrity": "sha512-a+EPoD+uZiNfh+5fxw2nO9QwFa6nJe2Or35fGY6Ipw1R3R4AGz1d1TEZrCegvw2YTmZ0jXirGYlzxxpYSHwpEg=="
		},
		"cssom": {
			"version": "0.4.4",
			"resolved": "https://registry.npmjs.org/cssom/-/cssom-0.4.4.tgz",
			"integrity": "sha512-p3pvU7r1MyyqbTk+WbNJIgJjG2VmTIaB10rI93LzVPrmDJKkzKYMtxxyAvQXR/NS6otuzveI7+7BBq3SjBS2mw=="
		},
		"cssstyle": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-2.3.0.tgz",
			"integrity": "sha512-AZL67abkUzIuvcHqk7c09cezpGNcxUxU4Ioi/05xHk4DQeTkWmGYftIE6ctU6AEt+Gn4n1lDStOtj7FKycP71A==",
			"requires": {
				"cssom": "~0.3.6"
			},
			"dependencies": {
				"cssom": {
					"version": "0.3.8",
					"resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.8.tgz",
					"integrity": "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg=="
				}
			}
		},
		"culvert": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/culvert/-/culvert-0.1.2.tgz",
			"integrity": "sha1-lQL18BVKLVoioCPnn3HMk2+m728="
		},
		"d": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/d/-/d-1.0.1.tgz",
			"integrity": "sha512-m62ShEObQ39CfralilEQRjH6oAMtNCV1xJyEx5LpRYUVN+EviphDgUc/F3hnYbADmkiNs67Y+3ylmlG7Lnu+FA==",
			"requires": {
				"es5-ext": "^0.10.50",
				"type": "^1.0.1"
			}
		},
		"dashdash": {
			"version": "1.14.1",
			"resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
			"integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
			"requires": {
				"assert-plus": "^1.0.0"
			}
		},
		"data-uri-to-buffer": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/data-uri-to-buffer/-/data-uri-to-buffer-3.0.1.tgz",
			"integrity": "sha512-WboRycPNsVw3B3TL559F7kuBUM4d8CgMEvk6xEJlOp7OBPjt6G7z8WMWlD2rOFZLk6OYfFIUGsCOWzcQH9K2og=="
		},
		"data-urls": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/data-urls/-/data-urls-2.0.0.tgz",
			"integrity": "sha512-X5eWTSXO/BJmpdIKCRuKUgSCgAN0OwliVK3yPKbwIWU1Tdw5BRajxlzMidvh+gwko9AfQ9zIj52pzF91Q3YAvQ==",
			"requires": {
				"abab": "^2.0.3",
				"whatwg-mimetype": "^2.3.0",
				"whatwg-url": "^8.0.0"
			}
		},
		"dayjs": {
			"version": "1.8.36",
			"resolved": "https://registry.npmjs.org/dayjs/-/dayjs-1.8.36.tgz",
			"integrity": "sha512-3VmRXEtw7RZKAf+4Tv1Ym9AGeo8r8+CjDi26x+7SYQil1UqtqdaokhzoEJohqlzt0m5kacJSDhJQkG/LWhpRBw=="
		},
		"debug": {
			"version": "2.6.9",
			"resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
			"integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
			"requires": {
				"ms": "2.0.0"
			},
			"dependencies": {
				"ms": {
					"version": "2.0.0",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
					"integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
				}
			}
		},
		"decamelize": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/decamelize/-/decamelize-1.2.0.tgz",
			"integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA="
		},
		"decimal.js": {
			"version": "10.2.1",
			"resolved": "https://registry.npmjs.org/decimal.js/-/decimal.js-10.2.1.tgz",
			"integrity": "sha512-KaL7+6Fw6i5A2XSnsbhm/6B+NuEA7TZ4vqxnd5tXz9sbKtrN9Srj8ab4vKVdK8YAqZO9P1kg45Y6YLoduPf+kw=="
		},
		"decompress-response": {
			"version": "4.2.1",
			"resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-4.2.1.tgz",
			"integrity": "sha512-jOSne2qbyE+/r8G1VU+G/82LBs2Fs4LAsTiLSHOCOMZQl2OKZ6i8i4IyHemTe+/yIXOtTcRQMzPcgyhoFlqPkw==",
			"requires": {
				"mimic-response": "^2.0.0"
			}
		},
		"deep-extend": {
			"version": "0.6.0",
			"resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
			"integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA=="
		},
		"deep-is": {
			"version": "0.1.3",
			"resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.3.tgz",
			"integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ="
		},
		"defaults": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
			"integrity": "sha1-xlYFHpgX2f8I7YgUd/P+QBnz730=",
			"requires": {
				"clone": "^1.0.2"
			}
		},
		"degenerator": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/degenerator/-/degenerator-2.2.0.tgz",
			"integrity": "sha512-aiQcQowF01RxFI4ZLFMpzyotbQonhNpBao6dkI8JPk5a+hmSjR5ErHp2CQySmQe8os3VBqLCIh87nDBgZXvsmg==",
			"requires": {
				"ast-types": "^0.13.2",
				"escodegen": "^1.8.1",
				"esprima": "^4.0.0"
			}
		},
		"delayed-stream": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
			"integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk="
		},
		"delegates": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",
			"integrity": "sha1-hMbhWbgZBP3KWaDvRM2HDTElD5o="
		},
		"depd": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
			"integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak="
		},
		"detect-libc": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-1.0.3.tgz",
			"integrity": "sha1-+hN8S9aY7fVc1c0CrFWfkaTEups="
		},
		"dijkstrajs": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/dijkstrajs/-/dijkstrajs-1.0.1.tgz",
			"integrity": "sha1-082BIh4+pAdCz83lVtTpnpjdxxs="
		},
		"dom-serializer": {
			"version": "0.1.1",
			"resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-0.1.1.tgz",
			"integrity": "sha512-l0IU0pPzLWSHBcieZbpOKgkIn3ts3vAh7ZuFyXNwJxJXk/c4Gwj9xaTJwIDVQCXawWD0qb3IzMGH5rglQaO0XA==",
			"requires": {
				"domelementtype": "^1.3.0",
				"entities": "^1.1.1"
			}
		},
		"dom-walk": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/dom-walk/-/dom-walk-0.1.2.tgz",
			"integrity": "sha512-6QvTW9mrGeIegrFXdtQi9pk7O/nSK6lSdXW2eqUspN5LWD7UTji2Fqw5V2YLjBpHEoU9Xl/eUWNpDeZvoyOv2w=="
		},
		"domelementtype": {
			"version": "1.3.1",
			"resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-1.3.1.tgz",
			"integrity": "sha512-BSKB+TSpMpFI/HOxCNr1O8aMOTZ8hT3pM3GQ0w/mWRmkhEDSFJkkyzz4XQsBV44BChwGkrDfMyjVD0eA2aFV3w=="
		},
		"domexception": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/domexception/-/domexception-2.0.1.tgz",
			"integrity": "sha512-yxJ2mFy/sibVQlu5qHjOkf9J3K6zgmCxgJ94u2EdvDOV09H+32LtRswEcUsmUWN72pVLOEnTSRaIVVzVQgS0dg==",
			"requires": {
				"webidl-conversions": "^5.0.0"
			},
			"dependencies": {
				"webidl-conversions": {
					"version": "5.0.0",
					"resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-5.0.0.tgz",
					"integrity": "sha512-VlZwKPCkYKxQgeSbH5EyngOmRp7Ww7I9rQLERETtf5ofd9pGeswWiOtogpEO850jziPRarreGxn5QIiTqpb2wA=="
				}
			}
		},
		"domhandler": {
			"version": "2.4.2",
			"resolved": "https://registry.npmjs.org/domhandler/-/domhandler-2.4.2.tgz",
			"integrity": "sha512-JiK04h0Ht5u/80fdLMCEmV4zkNh2BcoMFBmZ/91WtYZ8qVXSKjiw7fXMgFPnHcSZgOo3XdinHvmnDUeMf5R4wA==",
			"requires": {
				"domelementtype": "1"
			}
		},
		"domutils": {
			"version": "1.5.1",
			"resolved": "https://registry.npmjs.org/domutils/-/domutils-1.5.1.tgz",
			"integrity": "sha1-3NhIiib1Y9YQeeSMn3t+Mjc2gs8=",
			"requires": {
				"dom-serializer": "0",
				"domelementtype": "1"
			}
		},
		"dotenv": {
			"version": "8.6.0",
			"resolved": "https://registry.npmjs.org/dotenv/-/dotenv-8.6.0.tgz",
			"integrity": "sha512-IrPdXQsk2BbzvCBGBOTmmSH5SodmqZNt4ERAZDmW4CT+tL8VtvinqywuANaFu4bOMWki16nqf0e4oC0QIaDr/g=="
		},
		"dottie": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/dottie/-/dottie-2.0.2.tgz",
			"integrity": "sha512-fmrwR04lsniq/uSr8yikThDTrM7epXHBAAjH9TbeH3rEA8tdCO7mRzB9hdmdGyJCxF8KERo9CITcm3kGuoyMhg=="
		},
		"duplexify": {
			"version": "3.7.1",
			"resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.7.1.tgz",
			"integrity": "sha512-07z8uv2wMyS51kKhD1KsdXJg5WQ6t93RneqRxUHnskXVtlYYkLqM0gqStQZ3pj073g687jPCHrqNfCzawLYh5g==",
			"requires": {
				"end-of-stream": "^1.0.0",
				"inherits": "^2.0.1",
				"readable-stream": "^2.0.0",
				"stream-shift": "^1.0.0"
			}
		},
		"ecc-jsbn": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
			"integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
			"requires": {
				"jsbn": "~0.1.0",
				"safer-buffer": "^2.1.0"
			}
		},
		"ee-first": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
			"integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
		},
		"emitter-listener": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/emitter-listener/-/emitter-listener-1.1.2.tgz",
			"integrity": "sha512-Bt1sBAGFHY9DKY+4/2cV6izcKJUf5T7/gkdmkxzX/qv9CcGH8xSwVRW5mtX03SWJtRTWSOpzCuWN9rBFYZepZQ==",
			"requires": {
				"shimmer": "^1.2.0"
			}
		},
		"emoji-regex": {
			"version": "7.0.3",
			"resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-7.0.3.tgz",
			"integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA=="
		},
		"encoding": {
			"version": "0.1.13",
			"resolved": "https://registry.npmjs.org/encoding/-/encoding-0.1.13.tgz",
			"integrity": "sha512-ETBauow1T35Y/WZMkio9jiM0Z5xjHHmJ4XmjZOq1l/dXz3lr2sRn87nJy20RupqSh1F2m3HHPSp8ShIPQJrJ3A==",
			"requires": {
				"iconv-lite": "^0.6.2"
			},
			"dependencies": {
				"iconv-lite": {
					"version": "0.6.2",
					"resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.2.tgz",
					"integrity": "sha512-2y91h5OpQlolefMPmUlivelittSWy0rP+oYVpn6A7GwVHNE8AWzoYOBNmlwks3LobaJxgHCYZAnyNo2GgpNRNQ==",
					"requires": {
						"safer-buffer": ">= 2.1.2 < 3.0.0"
					}
				}
			}
		},
		"end-of-stream": {
			"version": "1.4.4",
			"resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
			"integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
			"requires": {
				"once": "^1.4.0"
			}
		},
		"enquirer": {
			"version": "2.3.6",
			"resolved": "https://registry.npmjs.org/enquirer/-/enquirer-2.3.6.tgz",
			"integrity": "sha512-yjNnPr315/FjS4zIsUxYguYUPP2e1NK4d7E7ZOLiyYCcbFBiTMyID+2wvm2w6+pZ/odMA7cRkjhsPbltwBOrLg==",
			"requires": {
				"ansi-colors": "^4.1.1"
			}
		},
		"entities": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/entities/-/entities-1.1.2.tgz",
			"integrity": "sha512-f2LZMYl1Fzu7YSBKg+RoROelpOaNrcGmE9AZubeDfrCEia483oW4MI4VyFd5VNHIgQ/7qm1I0wUHK1eJnn2y2w=="
		},
		"es5-ext": {
			"version": "0.10.53",
			"resolved": "https://registry.npmjs.org/es5-ext/-/es5-ext-0.10.53.tgz",
			"integrity": "sha512-Xs2Stw6NiNHWypzRTY1MtaG/uJlwCk8kH81920ma8mvN8Xq1gsfhZvpkImLQArw8AHnv8MT2I45J3c0R8slE+Q==",
			"requires": {
				"es6-iterator": "~2.0.3",
				"es6-symbol": "~3.1.3",
				"next-tick": "~1.0.0"
			}
		},
		"es6-iterator": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/es6-iterator/-/es6-iterator-2.0.3.tgz",
			"integrity": "sha1-p96IkUGgWpSwhUQDstCg+/qY87c=",
			"requires": {
				"d": "1",
				"es5-ext": "^0.10.35",
				"es6-symbol": "^3.1.1"
			}
		},
		"es6-map": {
			"version": "0.1.5",
			"resolved": "https://registry.npmjs.org/es6-map/-/es6-map-0.1.5.tgz",
			"integrity": "sha1-kTbgUD3MBqMBaQ8LsU/042TpSfA=",
			"requires": {
				"d": "1",
				"es5-ext": "~0.10.14",
				"es6-iterator": "~2.0.1",
				"es6-set": "~0.1.5",
				"es6-symbol": "~3.1.1",
				"event-emitter": "~0.3.5"
			}
		},
		"es6-set": {
			"version": "0.1.5",
			"resolved": "https://registry.npmjs.org/es6-set/-/es6-set-0.1.5.tgz",
			"integrity": "sha1-0rPsXU2ADO2BjbU40ol02wpzzLE=",
			"requires": {
				"d": "1",
				"es5-ext": "~0.10.14",
				"es6-iterator": "~2.0.1",
				"es6-symbol": "3.1.1",
				"event-emitter": "~0.3.5"
			},
			"dependencies": {
				"es6-symbol": {
					"version": "3.1.1",
					"resolved": "https://registry.npmjs.org/es6-symbol/-/es6-symbol-3.1.1.tgz",
					"integrity": "sha1-vwDvT9q2uhtG7Le2KbTH7VcVzHc=",
					"requires": {
						"d": "1",
						"es5-ext": "~0.10.14"
					}
				}
			}
		},
		"es6-symbol": {
			"version": "3.1.3",
			"resolved": "https://registry.npmjs.org/es6-symbol/-/es6-symbol-3.1.3.tgz",
			"integrity": "sha512-NJ6Yn3FuDinBaBRWl/q5X/s4koRHBrgKAu+yGI6JCBeiu3qrcbJhwT2GeR/EXVfylRk8dpQVJoLEFhK+Mu31NA==",
			"requires": {
				"d": "^1.0.1",
				"ext": "^1.1.2"
			}
		},
		"escape-string-regexp": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
			"integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA=="
		},
		"escodegen": {
			"version": "1.14.3",
			"resolved": "https://registry.npmjs.org/escodegen/-/escodegen-1.14.3.tgz",
			"integrity": "sha512-qFcX0XJkdg+PB3xjZZG/wKSuT1PnQWx57+TVSjIMmILd2yC/6ByYElPwJnslDsuWuSAp4AwJGumarAAmJch5Kw==",
			"requires": {
				"esprima": "^4.0.1",
				"estraverse": "^4.2.0",
				"esutils": "^2.0.2",
				"optionator": "^0.8.1",
				"source-map": "~0.6.1"
			}
		},
		"esprima": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
			"integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A=="
		},
		"estraverse": {
			"version": "4.3.0",
			"resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.3.0.tgz",
			"integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw=="
		},
		"esutils": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
			"integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g=="
		},
		"event-emitter": {
			"version": "0.3.5",
			"resolved": "https://registry.npmjs.org/event-emitter/-/event-emitter-0.3.5.tgz",
			"integrity": "sha1-34xp7vFkeSPHFXuc6DhAYQsCzDk=",
			"requires": {
				"d": "1",
				"es5-ext": "~0.10.14"
			}
		},
		"eventemitter2": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/eventemitter2/-/eventemitter2-5.0.1.tgz",
			"integrity": "sha1-YZegldX7a1folC9v1+qtY6CclFI="
		},
		"exif-parser": {
			"version": "0.1.12",
			"resolved": "https://registry.npmjs.org/exif-parser/-/exif-parser-0.1.12.tgz",
			"integrity": "sha1-WKnS1ywCwfbwKg70qRZicrd2CSI="
		},
		"ext": {
			"version": "1.4.0",
			"resolved": "https://registry.npmjs.org/ext/-/ext-1.4.0.tgz",
			"integrity": "sha512-Key5NIsUxdqKg3vIsdw9dSuXpPCQ297y6wBjL30edxwPgt2E44WcWBZey/ZvUc6sERLTxKdyCu4gZFmUbk1Q7A==",
			"requires": {
				"type": "^2.0.0"
			},
			"dependencies": {
				"type": {
					"version": "2.5.0",
					"resolved": "https://registry.npmjs.org/type/-/type-2.5.0.tgz",
					"integrity": "sha512-180WMDQaIMm3+7hGXWf12GtdniDEy7nYcyFMKJn/eZz/6tSLXrUN9V0wKSbMjej0I1WHWbpREDEKHtqPQa9NNw=="
				}
			}
		},
		"extend": {
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
			"integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g=="
		},
		"extsprintf": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
			"integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU="
		},
		"fast-deep-equal": {
			"version": "3.1.3",
			"resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
			"integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q=="
		},
		"fast-json-patch": {
			"version": "3.0.0-1",
			"resolved": "https://registry.npmjs.org/fast-json-patch/-/fast-json-patch-3.0.0-1.tgz",
			"integrity": "sha512-6pdFb07cknxvPzCeLsFHStEy+MysPJPgZQ9LbQ/2O67unQF93SNqfdSqnPPl71YMHX+AD8gbl7iuoGFzHEdDuw=="
		},
		"fast-json-stable-stringify": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
			"integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw=="
		},
		"fast-levenshtein": {
			"version": "2.0.6",
			"resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
			"integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc="
		},
		"fast-printf": {
			"version": "1.6.5",
			"resolved": "https://registry.npmjs.org/fast-printf/-/fast-printf-1.6.5.tgz",
			"integrity": "sha512-0+bBTCT4SOmHg3NFsPO39s+EwUdQiKig4MMye7fM0ea24YprUW35AZuWVQdE0SMBRI/GIQldj8ydQGuVRE95UQ==",
			"requires": {
				"boolean": "^3.0.2"
			}
		},
		"fast-speedtest-api": {
			"version": "0.3.2",
			"resolved": "https://registry.npmjs.org/fast-speedtest-api/-/fast-speedtest-api-0.3.2.tgz",
			"integrity": "sha512-QEfo3wytVo3x/ds4grti1nJUGZhmgdX9OpQbkXc6levJamjUFenb1SdbiVYhrTx27pvOAHSJOAXMu62K0dIEDQ=="
		},
		"fca-unofficial": {
			"version": "1.3.10",
			"resolved": "https://registry.npmjs.org/fca-unofficial/-/fca-unofficial-1.3.10.tgz",
			"integrity": "sha512-JmmyRjeDX5uLvqFjWKEhN0TcJqHQTrLZcVMysPGwXXXuEpXzh9Db9t1hLrI/ZtY8lQpMcSBLHL52q8ZBFAivPw==",
			"requires": {
				"bluebird": "^2.11.0",
				"cheerio": "^0.22.0",
				"https-proxy-agent": "^4.0.0",
				"mqtt": "^3.0.0",
				"npmlog": "^1.2.0",
				"request": "^2.53.0",
				"websocket-stream": "^5.5.0"
			},
			"dependencies": {
				"agent-base": {
					"version": "5.1.1",
					"resolved": "https://registry.npmjs.org/agent-base/-/agent-base-5.1.1.tgz",
					"integrity": "sha512-TMeqbNl2fMW0nMjTEPOwe3J/PRFP4vqeoNuQMG0HlMrtm5QxKqdvAkZ1pRBQ/ulIyDD5Yq0nJ7YbdD8ey0TO3g=="
				},
				"are-we-there-yet": {
					"version": "1.0.6",
					"resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-1.0.6.tgz",
					"integrity": "sha1-otKMkxAqpsyWJFomy5VN4G7FPww=",
					"requires": {
						"delegates": "^1.0.0",
						"readable-stream": "^2.0.0 || ^1.1.13"
					}
				},
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"gauge": {
					"version": "1.2.7",
					"resolved": "https://registry.npmjs.org/gauge/-/gauge-1.2.7.tgz",
					"integrity": "sha1-6c7FSD09TuDvRLYKfZnkk14TbZM=",
					"requires": {
						"ansi": "^0.3.0",
						"has-unicode": "^2.0.0",
						"lodash.pad": "^4.1.0",
						"lodash.padend": "^4.1.0",
						"lodash.padstart": "^4.1.0"
					}
				},
				"https-proxy-agent": {
					"version": "4.0.0",
					"resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-4.0.0.tgz",
					"integrity": "sha512-zoDhWrkR3of1l9QAL8/scJZyLu8j/gBkcwcaQOZh7Gyh/+uJQzGVETdgT30akuwkpL8HTRfssqI3BZuV18teDg==",
					"requires": {
						"agent-base": "5",
						"debug": "4"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				},
				"npmlog": {
					"version": "1.2.1",
					"resolved": "https://registry.npmjs.org/npmlog/-/npmlog-1.2.1.tgz",
					"integrity": "sha1-KOe+YZYJtT960d0wChDWTXFiaLY=",
					"requires": {
						"ansi": "~0.3.0",
						"are-we-there-yet": "~1.0.0",
						"gauge": "~1.2.0"
					}
				}
			}
		},
		"fclone": {
			"version": "1.0.11",
			"resolved": "https://registry.npmjs.org/fclone/-/fclone-1.0.11.tgz",
			"integrity": "sha1-EOhdo4v+p/xZk0HClu4ddyZu5kA="
		},
		"figlet": {
			"version": "1.5.0",
			"resolved": "https://registry.npmjs.org/figlet/-/figlet-1.5.0.tgz",
			"integrity": "sha512-ZQJM4aifMpz6H19AW1VqvZ7l4pOE9p7i/3LyxgO2kp+PO/VcDYNqIHEMtkccqIhTXMKci4kjueJr/iCQEaT/Ww=="
		},
		"file-type": {
			"version": "9.0.0",
			"resolved": "https://registry.npmjs.org/file-type/-/file-type-9.0.0.tgz",
			"integrity": "sha512-Qe/5NJrgIOlwijpq3B7BEpzPFcgzggOTagZmkXQY4LA6bsXKTUstK7Wp12lEJ/mLKTpvIZxmIuRcLYWT6ov9lw=="
		},
		"file-uri-to-path": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/file-uri-to-path/-/file-uri-to-path-2.0.0.tgz",
			"integrity": "sha512-hjPFI8oE/2iQPVe4gbrJ73Pp+Xfub2+WI2LlXDbsaJBwT5wuMh35WNWVYYTpnz895shtwfyutMFLFywpQAFdLg=="
		},
		"fill-range": {
			"version": "7.0.1",
			"resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
			"integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
			"requires": {
				"to-regex-range": "^5.0.1"
			}
		},
		"find-up": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/find-up/-/find-up-3.0.0.tgz",
			"integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
			"requires": {
				"locate-path": "^3.0.0"
			}
		},
		"follow-redirects": {
			"version": "1.14.1",
			"resolved": "https://registry.npmjs.org/follow-redirects/-/follow-redirects-1.14.1.tgz",
			"integrity": "sha512-HWqDgT7ZEkqRzBvc2s64vSZ/hfOceEol3ac/7tKwzuvEyWx3/4UegXh5oBOIotkGsObyk3xznnSRVADBgWSQVg=="
		},
		"forever-agent": {
			"version": "0.6.1",
			"resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
			"integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE="
		},
		"form-data": {
			"version": "2.3.3",
			"resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
			"integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
			"requires": {
				"asynckit": "^0.4.0",
				"combined-stream": "^1.0.6",
				"mime-types": "^2.1.12"
			}
		},
		"fs": {
			"version": "0.0.1-security",
			"resolved": "https://registry.npmjs.org/fs/-/fs-0.0.1-security.tgz",
			"integrity": "sha1-invTcYa23d84E/I4WLV+yq9eQdQ="
		},
		"fs-constants": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/fs-constants/-/fs-constants-1.0.0.tgz",
			"integrity": "sha512-y6OAwoSIf7FyjMIv94u+b5rdheZEjzR63GTyZJm5qh4Bi+2YgwLCcI/fPFZkL5PSixOt6ZNKm+w+Hfp/Bciwow=="
		},
		"fs-extra": {
			"version": "10.0.0",
			"resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-10.0.0.tgz",
			"integrity": "sha512-C5owb14u9eJwizKGdchcDUQeFtlSHHthBk8pbX9Vc1PFZrLombudjDnNns88aYslCyF6IY5SUw3Roz6xShcEIQ==",
			"requires": {
				"graceful-fs": "^4.2.0",
				"jsonfile": "^6.0.1",
				"universalify": "^2.0.0"
			}
		},
		"fs-minipass": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-2.1.0.tgz",
			"integrity": "sha512-V/JgOLFCS+R6Vcq0slCuaeWEdNC3ouDlJMNIsacH2VtALiu9mV4LPrHc5cDl8k5aw6J8jwgWWpiTo5RYhmIzvg==",
			"requires": {
				"minipass": "^3.0.0"
			}
		},
		"fs.realpath": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
			"integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
		},
		"fsevents": {
			"version": "2.3.2",
			"resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
			"integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
			"optional": true
		},
		"fstream": {
			"version": "1.0.12",
			"resolved": "https://registry.npmjs.org/fstream/-/fstream-1.0.12.tgz",
			"integrity": "sha512-WvJ193OHa0GHPEL+AycEJgxvBEwyfRkN1vhjca23OaPVMCaLCXTd5qAu82AjTcgP1UJmytkOKb63Ypde7raDIg==",
			"optional": true,
			"requires": {
				"graceful-fs": "^4.1.2",
				"inherits": "~2.0.0",
				"mkdirp": ">=0.5 0",
				"rimraf": "2"
			},
			"dependencies": {
				"mkdirp": {
					"version": "0.5.5",
					"resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
					"integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
					"optional": true,
					"requires": {
						"minimist": "^1.2.5"
					}
				},
				"rimraf": {
					"version": "2.7.1",
					"resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
					"integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
					"optional": true,
					"requires": {
						"glob": "^7.1.3"
					}
				}
			}
		},
		"ftp": {
			"version": "0.3.10",
			"resolved": "https://registry.npmjs.org/ftp/-/ftp-0.3.10.tgz",
			"integrity": "sha1-kZfYYa2BQvPmPVqDv+TFn3MwiF0=",
			"requires": {
				"readable-stream": "1.1.x",
				"xregexp": "2.0.0"
			},
			"dependencies": {
				"isarray": {
					"version": "0.0.1",
					"resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",
					"integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8="
				},
				"readable-stream": {
					"version": "1.1.14",
					"resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-1.1.14.tgz",
					"integrity": "sha1-fPTFTvZI44EwhMY23SB54WbAgdk=",
					"requires": {
						"core-util-is": "~1.0.0",
						"inherits": "~2.0.1",
						"isarray": "0.0.1",
						"string_decoder": "~0.10.x"
					}
				},
				"string_decoder": {
					"version": "0.10.31",
					"resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-0.10.31.tgz",
					"integrity": "sha1-YuIDvEF2bGwoyfyEMB2rHFMQ+pQ="
				}
			}
		},
		"function-bind": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
			"integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
		},
		"gauge": {
			"version": "2.7.4",
			"resolved": "https://registry.npmjs.org/gauge/-/gauge-2.7.4.tgz",
			"integrity": "sha1-LANAXHU4w51+s3sxcCLjJfsBi/c=",
			"requires": {
				"aproba": "^1.0.3",
				"console-control-strings": "^1.0.0",
				"has-unicode": "^2.0.0",
				"object-assign": "^4.1.0",
				"signal-exit": "^3.0.0",
				"string-width": "^1.0.1",
				"strip-ansi": "^3.0.1",
				"wide-align": "^1.1.0"
			}
		},
		"get-caller-file": {
			"version": "2.0.5",
			"resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
			"integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg=="
		},
		"get-uri": {
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/get-uri/-/get-uri-3.0.2.tgz",
			"integrity": "sha512-+5s0SJbGoyiJTZZ2JTpFPLMPSch72KEqGOTvQsBqg0RBWvwhWUSYZFAtz3TPW0GXJuLBJPts1E241iHg+VRfhg==",
			"requires": {
				"@tootallnate/once": "1",
				"data-uri-to-buffer": "3",
				"debug": "4",
				"file-uri-to-path": "2",
				"fs-extra": "^8.1.0",
				"ftp": "^0.3.10"
			},
			"dependencies": {
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"fs-extra": {
					"version": "8.1.0",
					"resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-8.1.0.tgz",
					"integrity": "sha512-yhlQgA6mnOJUKOsRUFsgJdQCvkKhcz8tlZG5HBQfReYZy46OwLcY+Zia0mtdHsOo9y/hP+CxMN0TU9QxoOtG4g==",
					"requires": {
						"graceful-fs": "^4.2.0",
						"jsonfile": "^4.0.0",
						"universalify": "^0.1.0"
					}
				},
				"jsonfile": {
					"version": "4.0.0",
					"resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
					"integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
					"requires": {
						"graceful-fs": "^4.1.6"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				},
				"universalify": {
					"version": "0.1.2",
					"resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
					"integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg=="
				}
			}
		},
		"getpass": {
			"version": "0.1.7",
			"resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
			"integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
			"requires": {
				"assert-plus": "^1.0.0"
			}
		},
		"gifwrap": {
			"version": "0.9.2",
			"resolved": "https://registry.npmjs.org/gifwrap/-/gifwrap-0.9.2.tgz",
			"integrity": "sha512-fcIswrPaiCDAyO8xnWvHSZdWChjKXUanKKpAiWWJ/UTkEi/aYKn5+90e7DE820zbEaVR9CE2y4z9bzhQijZ0BA==",
			"requires": {
				"image-q": "^1.1.1",
				"omggif": "^1.0.10"
			}
		},
		"git-node-fs": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/git-node-fs/-/git-node-fs-1.0.0.tgz",
			"integrity": "sha1-SbIV4kLr5Dqkx1Ybu6SZUhdSCA8="
		},
		"git-sha1": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/git-sha1/-/git-sha1-0.1.2.tgz",
			"integrity": "sha1-WZrBkrcYdYJeE6RF86bgURjC90U="
		},
		"glob": {
			"version": "7.1.7",
			"resolved": "https://registry.npmjs.org/glob/-/glob-7.1.7.tgz",
			"integrity": "sha512-OvD9ENzPLbegENnYP5UUfJIirTg4+XwMWGaQfQTY0JenxNvvIKP3U3/tAQSPIu/lHxXYSZmpXlUHeqAIdKzBLQ==",
			"requires": {
				"fs.realpath": "^1.0.0",
				"inflight": "^1.0.4",
				"inherits": "2",
				"minimatch": "^3.0.4",
				"once": "^1.3.0",
				"path-is-absolute": "^1.0.0"
			}
		},
		"glob-parent": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-3.1.0.tgz",
			"integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
			"requires": {
				"is-glob": "^3.1.0",
				"path-dirname": "^1.0.0"
			}
		},
		"glob-stream": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/glob-stream/-/glob-stream-6.1.0.tgz",
			"integrity": "sha1-cEXJlBOz65SIjYOrRtC0BMx73eQ=",
			"requires": {
				"extend": "^3.0.0",
				"glob": "^7.1.1",
				"glob-parent": "^3.1.0",
				"is-negated-glob": "^1.0.0",
				"ordered-read-streams": "^1.0.0",
				"pumpify": "^1.3.5",
				"readable-stream": "^2.1.5",
				"remove-trailing-separator": "^1.0.1",
				"to-absolute-glob": "^2.0.0",
				"unique-stream": "^2.0.2"
			}
		},
		"global": {
			"version": "4.4.0",
			"resolved": "https://registry.npmjs.org/global/-/global-4.4.0.tgz",
			"integrity": "sha512-wv/LAoHdRE3BeTGz53FAamhGlPLhlssK45usmGFThIi4XqnBmjKQ16u+RNbP7WvigRZDxUsM0J3gcQ5yicaL0w==",
			"requires": {
				"min-document": "^2.19.0",
				"process": "^0.11.10"
			}
		},
		"graceful-fs": {
			"version": "4.2.6",
			"resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.6.tgz",
			"integrity": "sha512-nTnJ528pbqxYanhpDYsi4Rd8MAeaBA67+RZ10CM1m3bTAVFEDcd5AuA4a6W5YkGZ1iNXHzZz8T6TBKLeBuNriQ=="
		},
		"har-schema": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
			"integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI="
		},
		"har-validator": {
			"version": "5.1.5",
			"resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.5.tgz",
			"integrity": "sha512-nmT2T0lljbxdQZfspsno9hgrG3Uir6Ks5afism62poxqBM6sDnMEuPmzTq8XN0OEwqKLLdh1jQI3qyE66Nzb3w==",
			"requires": {
				"ajv": "^6.12.3",
				"har-schema": "^2.0.0"
			}
		},
		"has": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
			"integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
			"requires": {
				"function-bind": "^1.1.1"
			}
		},
		"has-flag": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
			"integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
		},
		"has-unicode": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/has-unicode/-/has-unicode-2.0.1.tgz",
			"integrity": "sha1-4Ob+aijPUROIVeCG0Wkedx3iqLk="
		},
		"he": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/he/-/he-1.2.0.tgz",
			"integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw=="
		},
		"help-me": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/help-me/-/help-me-1.1.0.tgz",
			"integrity": "sha1-jy1QjQYAtKRW2i8IZVbn5cBWo8Y=",
			"requires": {
				"callback-stream": "^1.0.2",
				"glob-stream": "^6.1.0",
				"through2": "^2.0.1",
				"xtend": "^4.0.0"
			}
		},
		"html-encoding-sniffer": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-2.0.1.tgz",
			"integrity": "sha512-D5JbOMBIR/TVZkubHT+OyT2705QvogUW4IBn6nHd756OwieSF9aDYFj4dv6HHEVGYbHaLETa3WggZYWWMyy3ZQ==",
			"requires": {
				"whatwg-encoding": "^1.0.5"
			}
		},
		"html-to-text": {
			"version": "5.1.1",
			"resolved": "https://registry.npmjs.org/html-to-text/-/html-to-text-5.1.1.tgz",
			"integrity": "sha512-Bci6bD/JIfZSvG4s0gW/9mMKwBRoe/1RWLxUME/d6WUSZCdY7T60bssf/jFf7EYXRyqU4P5xdClVqiYU0/ypdA==",
			"requires": {
				"he": "^1.2.0",
				"htmlparser2": "^3.10.1",
				"lodash": "^4.17.11",
				"minimist": "^1.2.0"
			}
		},
		"htmlparser2": {
			"version": "3.10.1",
			"resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-3.10.1.tgz",
			"integrity": "sha512-IgieNijUMbkDovyoKObU1DUhm1iwNYE/fuifEoEHfd1oZKZDaONBSkal7Y01shxsM49R4XaMdGez3WnF9UfiCQ==",
			"requires": {
				"domelementtype": "^1.3.1",
				"domhandler": "^2.3.0",
				"domutils": "^1.5.1",
				"entities": "^1.1.1",
				"inherits": "^2.0.1",
				"readable-stream": "^3.1.1"
			},
			"dependencies": {
				"readable-stream": {
					"version": "3.6.0",
					"resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
					"integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
					"requires": {
						"inherits": "^2.0.3",
						"string_decoder": "^1.1.1",
						"util-deprecate": "^1.0.1"
					}
				}
			}
		},
		"http-errors": {
			"version": "1.7.2",
			"resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.7.2.tgz",
			"integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
			"requires": {
				"depd": "~1.1.2",
				"inherits": "2.0.3",
				"setprototypeof": "1.1.1",
				"statuses": ">= 1.5.0 < 2",
				"toidentifier": "1.0.0"
			}
		},
		"http-proxy-agent": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-4.0.1.tgz",
			"integrity": "sha512-k0zdNgqWTGA6aeIRVpvfVob4fL52dTfaehylg0Y4UvSySvOq/Y+BOyPrgpUrA7HylqvU8vIZGsRuXmspskV0Tg==",
			"requires": {
				"@tootallnate/once": "1",
				"agent-base": "6",
				"debug": "4"
			},
			"dependencies": {
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				}
			}
		},
		"http-signature": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
			"integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
			"requires": {
				"assert-plus": "^1.0.0",
				"jsprim": "^1.2.2",
				"sshpk": "^1.7.0"
			}
		},
		"https-proxy-agent": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.0.tgz",
			"integrity": "sha512-EkYm5BcKUGiduxzSt3Eppko+PiNWNEpa4ySk9vTC6wDsQJW9rHSa+UhGNJoRYp7bz6Ht1eaRIa6QaJqO5rCFbA==",
			"requires": {
				"agent-base": "6",
				"debug": "4"
			},
			"dependencies": {
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				}
			}
		},
		"hyntax": {
			"version": "1.1.9",
			"resolved": "https://registry.npmjs.org/hyntax/-/hyntax-1.1.9.tgz",
			"integrity": "sha512-xjxyDLbVDdLgjPnl4NM+Iu6il3UPmk6PNCBXruQKeuKDc/HtaZx1hk1AtMgw3vsn9YnLZRfoBpPxYMXcoT5KAA=="
		},
		"iconv-lite": {
			"version": "0.4.24",
			"resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
			"integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
			"requires": {
				"safer-buffer": ">= 2.1.2 < 3"
			}
		},
		"ieee754": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
			"integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA=="
		},
		"ignore-walk": {
			"version": "3.0.4",
			"resolved": "https://registry.npmjs.org/ignore-walk/-/ignore-walk-3.0.4.tgz",
			"integrity": "sha512-PY6Ii8o1jMRA1z4F2hRkH/xN59ox43DavKvD3oDpfurRlOJyAHpifIwpbdv1n4jt4ov0jSpw3kQ4GhJnpBL6WQ==",
			"requires": {
				"minimatch": "^3.0.4"
			}
		},
		"image-q": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/image-q/-/image-q-1.1.1.tgz",
			"integrity": "sha1-/IQJlmRGC5DKhi2TALa/u7+/gFY="
		},
		"inflection": {
			"version": "1.12.0",
			"resolved": "https://registry.npmjs.org/inflection/-/inflection-1.12.0.tgz",
			"integrity": "sha1-ogCTVlbW9fa8TcdQLhrstwMihBY="
		},
		"inflight": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
			"integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
			"requires": {
				"once": "^1.3.0",
				"wrappy": "1"
			}
		},
		"infobox-parser": {
			"version": "3.6.0",
			"resolved": "https://registry.npmjs.org/infobox-parser/-/infobox-parser-3.6.0.tgz",
			"integrity": "sha512-Owa1Lxq/CdbDEygvTtEqL9sPLom24/pSNTjgRhvsNbXvXPDep1K8FwGNqP3isuewMv3k3/v3eP9d4d7Mg+bJcQ==",
			"requires": {
				"camelcase": "^4.1.0"
			},
			"dependencies": {
				"camelcase": {
					"version": "4.1.0",
					"resolved": "https://registry.npmjs.org/camelcase/-/camelcase-4.1.0.tgz",
					"integrity": "sha1-1UVjW+HjPFQmScaRc+Xeas+uNN0="
				}
			}
		},
		"inherits": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.3.tgz",
			"integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4="
		},
		"ini": {
			"version": "1.3.8",
			"resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
			"integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew=="
		},
		"ip": {
			"version": "1.1.5",
			"resolved": "https://registry.npmjs.org/ip/-/ip-1.1.5.tgz",
			"integrity": "sha1-vd7XARQpCCjAoDnnLvJfWq7ENUo="
		},
		"is-absolute": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/is-absolute/-/is-absolute-1.0.0.tgz",
			"integrity": "sha512-dOWoqflvcydARa360Gvv18DZ/gRuHKi2NU/wU5X1ZFzdYfH29nkiNZsF3mp4OJ3H4yo9Mx8A/uAGNzpzPN3yBA==",
			"requires": {
				"is-relative": "^1.0.0",
				"is-windows": "^1.0.1"
			}
		},
		"is-binary-path": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
			"integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
			"requires": {
				"binary-extensions": "^2.0.0"
			}
		},
		"is-core-module": {
			"version": "2.4.0",
			"resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.4.0.tgz",
			"integrity": "sha512-6A2fkfq1rfeQZjxrZJGerpLCTHRNEBiSgnu0+obeJpEPZRUooHgsizvzv0ZjJwOz3iWIHdJtVWJ/tmPr3D21/A==",
			"requires": {
				"has": "^1.0.3"
			}
		},
		"is-extglob": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
			"integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI="
		},
		"is-fullwidth-code-point": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
			"integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
			"requires": {
				"number-is-nan": "^1.0.0"
			}
		},
		"is-function": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/is-function/-/is-function-1.0.2.tgz",
			"integrity": "sha512-lw7DUp0aWXYg+CBCN+JKkcE0Q2RayZnSvnZBlwgxHBQhqt5pZNVy4Ri7H9GmmXkdu7LUthszM+Tor1u/2iBcpQ=="
		},
		"is-glob": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/is-glob/-/is-glob-3.1.0.tgz",
			"integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
			"requires": {
				"is-extglob": "^2.1.0"
			}
		},
		"is-interactive": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/is-interactive/-/is-interactive-1.0.0.tgz",
			"integrity": "sha512-2HvIEKRoqS62guEC+qBjpvRubdX910WCMuJTZ+I9yvqKU2/12eSL549HMwtabb4oupdj2sMP50k+XJfB/8JE6w=="
		},
		"is-negated-glob": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/is-negated-glob/-/is-negated-glob-1.0.0.tgz",
			"integrity": "sha1-aRC8pdqMleeEtXUbl2z1oQ/uNtI="
		},
		"is-number": {
			"version": "7.0.0",
			"resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
			"integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng=="
		},
		"is-potential-custom-element-name": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/is-potential-custom-element-name/-/is-potential-custom-element-name-1.0.1.tgz",
			"integrity": "sha512-bCYeRA2rVibKZd+s2625gGnGF/t7DSqDs4dP7CrLA1m7jKWz6pps0LpYLJN8Q64HtmPKJ1hrN3nzPNKFEKOUiQ=="
		},
		"is-relative": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/is-relative/-/is-relative-1.0.0.tgz",
			"integrity": "sha512-Kw/ReK0iqwKeu0MITLFuj0jbPAmEiOsIwyIXvvbfa6QfmN9pkD1M+8pdk7Rl/dTKbH34/XBFMbgD4iMJhLQbGA==",
			"requires": {
				"is-unc-path": "^1.0.0"
			}
		},
		"is-stream": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.0.tgz",
			"integrity": "sha512-XCoy+WlUr7d1+Z8GgSuXmpuUFC9fOhRXglJMx+dwLKTkL44Cjd4W1Z5P+BQZpr+cR93aGP4S/s7Ftw6Nd/kiEw=="
		},
		"is-typedarray": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
			"integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo="
		},
		"is-unc-path": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/is-unc-path/-/is-unc-path-1.0.0.tgz",
			"integrity": "sha512-mrGpVd0fs7WWLfVsStvgF6iEJnbjDFZh9/emhRDcGWTduTfNHd9CHeUwH3gYIjdbwo4On6hunkztwOaAw0yllQ==",
			"requires": {
				"unc-path-regex": "^0.1.2"
			}
		},
		"is-windows": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/is-windows/-/is-windows-1.0.2.tgz",
			"integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA=="
		},
		"isarray": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/isarray/-/isarray-1.0.0.tgz",
			"integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE="
		},
		"isexe": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
			"integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
			"optional": true
		},
		"iso8601-duration": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/iso8601-duration/-/iso8601-duration-1.3.0.tgz",
			"integrity": "sha512-K4CiUBzo3YeWk76FuET/dQPH03WE04R94feo5TSKQCXpoXQt9E4yx2CnY737QZnSAI3PI4WlKo/zfqizGx52QQ=="
		},
		"isstream": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
			"integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo="
		},
		"jimp": {
			"version": "0.16.1",
			"resolved": "https://registry.npmjs.org/jimp/-/jimp-0.16.1.tgz",
			"integrity": "sha512-+EKVxbR36Td7Hfd23wKGIeEyHbxShZDX6L8uJkgVW3ESA9GiTEPK08tG1XI2r/0w5Ch0HyJF5kPqF9K7EmGjaw==",
			"requires": {
				"@babel/runtime": "^7.7.2",
				"@jimp/custom": "^0.16.1",
				"@jimp/plugins": "^0.16.1",
				"@jimp/types": "^0.16.1",
				"regenerator-runtime": "^0.13.3"
			}
		},
		"joi": {
			"version": "17.4.0",
			"resolved": "https://registry.npmjs.org/joi/-/joi-17.4.0.tgz",
			"integrity": "sha512-F4WiW2xaV6wc1jxete70Rw4V/VuMd6IN+a5ilZsxG4uYtUXWu2kq9W5P2dz30e7Gmw8RCbY/u/uk+dMPma9tAg==",
			"requires": {
				"@hapi/hoek": "^9.0.0",
				"@hapi/topo": "^5.0.0",
				"@sideway/address": "^4.1.0",
				"@sideway/formula": "^3.0.0",
				"@sideway/pinpoint": "^2.0.0"
			}
		},
		"jpeg-js": {
			"version": "0.4.2",
			"resolved": "https://registry.npmjs.org/jpeg-js/-/jpeg-js-0.4.2.tgz",
			"integrity": "sha512-+az2gi/hvex7eLTMTlbRLOhH6P6WFdk2ITI8HJsaH2VqYO0I594zXSYEP+tf4FW+8Cy68ScDXoAsQdyQanv3sw=="
		},
		"js-git": {
			"version": "0.7.8",
			"resolved": "https://registry.npmjs.org/js-git/-/js-git-0.7.8.tgz",
			"integrity": "sha1-UvplWrYYd9bxB578ZTS1VPMeVEQ=",
			"requires": {
				"bodec": "^0.1.0",
				"culvert": "^0.1.2",
				"git-sha1": "^0.1.2",
				"pako": "^0.2.5"
			}
		},
		"jsbn": {
			"version": "0.1.1",
			"resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
			"integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM="
		},
		"jsdom": {
			"version": "16.5.3",
			"resolved": "https://registry.npmjs.org/jsdom/-/jsdom-16.5.3.tgz",
			"integrity": "sha512-Qj1H+PEvUsOtdPJ056ewXM4UJPCi4hhLA8wpiz9F2YvsRBhuFsXxtrIFAgGBDynQA9isAMGE91PfUYbdMPXuTA==",
			"requires": {
				"abab": "^2.0.5",
				"acorn": "^8.1.0",
				"acorn-globals": "^6.0.0",
				"cssom": "^0.4.4",
				"cssstyle": "^2.3.0",
				"data-urls": "^2.0.0",
				"decimal.js": "^10.2.1",
				"domexception": "^2.0.1",
				"escodegen": "^2.0.0",
				"html-encoding-sniffer": "^2.0.1",
				"is-potential-custom-element-name": "^1.0.0",
				"nwsapi": "^2.2.0",
				"parse5": "6.0.1",
				"request": "^2.88.2",
				"request-promise-native": "^1.0.9",
				"saxes": "^5.0.1",
				"symbol-tree": "^3.2.4",
				"tough-cookie": "^4.0.0",
				"w3c-hr-time": "^1.0.2",
				"w3c-xmlserializer": "^2.0.0",
				"webidl-conversions": "^6.1.0",
				"whatwg-encoding": "^1.0.5",
				"whatwg-mimetype": "^2.3.0",
				"whatwg-url": "^8.5.0",
				"ws": "^7.4.4",
				"xml-name-validator": "^3.0.0"
			},
			"dependencies": {
				"escodegen": {
					"version": "2.0.0",
					"resolved": "https://registry.npmjs.org/escodegen/-/escodegen-2.0.0.tgz",
					"integrity": "sha512-mmHKys/C8BFUGI+MAWNcSYoORYLMdPzjrknd2Vc+bUsjN5bXcr8EhrNB+UTqfL1y3I9c4fw2ihgtMPQLBRiQxw==",
					"requires": {
						"esprima": "^4.0.1",
						"estraverse": "^5.2.0",
						"esutils": "^2.0.2",
						"optionator": "^0.8.1",
						"source-map": "~0.6.1"
					}
				},
				"estraverse": {
					"version": "5.2.0",
					"resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz",
					"integrity": "sha512-BxbNGGNm0RyRYvUdHpIwv9IWzeM9XClbOxwoATuFdOE7ZE6wHL+HQ5T8hoPM+zHvmKzzsEqhgy0GrQ5X13afiQ=="
				},
				"tough-cookie": {
					"version": "4.0.0",
					"resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-4.0.0.tgz",
					"integrity": "sha512-tHdtEpQCMrc1YLrMaqXXcj6AxhYi/xgit6mZu1+EDWUn+qhUf8wMQoFIy9NXuq23zAwtcB0t/MjACGR18pcRbg==",
					"requires": {
						"psl": "^1.1.33",
						"punycode": "^2.1.1",
						"universalify": "^0.1.2"
					}
				},
				"universalify": {
					"version": "0.1.2",
					"resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
					"integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg=="
				},
				"ws": {
					"version": "7.4.5",
					"resolved": "https://registry.npmjs.org/ws/-/ws-7.4.5.tgz",
					"integrity": "sha512-xzyu3hFvomRfXKH8vOFMU3OguG6oOvhXMo3xsGy3xWExqaM2dxBbVxuD99O7m3ZUFMvvscsZDqxfgMaRr/Nr1g=="
				}
			}
		},
		"json-schema": {
			"version": "0.2.3",
			"resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.2.3.tgz",
			"integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM="
		},
		"json-schema-traverse": {
			"version": "0.4.1",
			"resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
			"integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg=="
		},
		"json-stable-stringify-without-jsonify": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
			"integrity": "sha1-nbe1lJatPzz+8wp1FC0tkwrXJlE="
		},
		"json-stringify-safe": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
			"integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus="
		},
		"json2csv": {
			"version": "4.5.1",
			"resolved": "https://registry.npmjs.org/json2csv/-/json2csv-4.5.1.tgz",
			"integrity": "sha512-o90Xa1ziGk3i7AJEO79Jac4+7SEUk58/DxS5mDPW6GF7poX0y7Y0pm1FbWrkz9VzKE4MpUW9aKBOCpJ0U1Ua8A==",
			"requires": {
				"commander": "^2.15.1",
				"jsonparse": "^1.3.1",
				"lodash.get": "^4.4.2"
			}
		},
		"jsonfile": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-6.1.0.tgz",
			"integrity": "sha512-5dgndWOriYSm5cnYaJNhalLNDKOqFwyDB/rr1E9ZsGciGvKPs8R2xYGCacuf3z6K1YKDz182fd+fY3cn3pMqXQ==",
			"requires": {
				"graceful-fs": "^4.1.6",
				"universalify": "^2.0.0"
			}
		},
		"jsonparse": {
			"version": "1.3.1",
			"resolved": "https://registry.npmjs.org/jsonparse/-/jsonparse-1.3.1.tgz",
			"integrity": "sha1-P02uSpH6wxX3EGL4UhzCOfE2YoA="
		},
		"jsprim": {
			"version": "1.4.1",
			"resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.1.tgz",
			"integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
			"requires": {
				"assert-plus": "1.0.0",
				"extsprintf": "1.3.0",
				"json-schema": "0.2.3",
				"verror": "1.10.0"
			}
		},
		"jssha": {
			"version": "3.2.0",
			"resolved": "https://registry.npmjs.org/jssha/-/jssha-3.2.0.tgz",
			"integrity": "sha512-QuruyBENDWdN4tZwJbQq7/eAK85FqrI4oDbXjy5IBhYD+2pTJyBUWZe8ctWaCkrV0gy6AaelgOZZBMeswEa/6Q=="
		},
		"lazy": {
			"version": "1.0.11",
			"resolved": "https://registry.npmjs.org/lazy/-/lazy-1.0.11.tgz",
			"integrity": "sha1-2qBoIGKCVCwIgojpdcKXwa53tpA="
		},
		"lazystream": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/lazystream/-/lazystream-1.0.0.tgz",
			"integrity": "sha1-9plf4PggOS9hOWvolGJAe7dxaOQ=",
			"requires": {
				"readable-stream": "^2.0.5"
			}
		},
		"leven": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/leven/-/leven-2.1.0.tgz",
			"integrity": "sha1-wuep93IJTe6dNCAq6KzORoeHVYA="
		},
		"levn": {
			"version": "0.3.0",
			"resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
			"integrity": "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=",
			"requires": {
				"prelude-ls": "~1.1.2",
				"type-check": "~0.3.2"
			}
		},
		"load-bmfont": {
			"version": "1.4.1",
			"resolved": "https://registry.npmjs.org/load-bmfont/-/load-bmfont-1.4.1.tgz",
			"integrity": "sha512-8UyQoYmdRDy81Brz6aLAUhfZLwr5zV0L3taTQ4hju7m6biuwiWiJXjPhBJxbUQJA8PrkvJ/7Enqmwk2sM14soA==",
			"requires": {
				"buffer-equal": "0.0.1",
				"mime": "^1.3.4",
				"parse-bmfont-ascii": "^1.0.3",
				"parse-bmfont-binary": "^1.0.5",
				"parse-bmfont-xml": "^1.1.4",
				"phin": "^2.9.1",
				"xhr": "^2.0.1",
				"xtend": "^4.0.0"
			}
		},
		"locate-path": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/locate-path/-/locate-path-3.0.0.tgz",
			"integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
			"requires": {
				"p-locate": "^3.0.0",
				"path-exists": "^3.0.0"
			}
		},
		"lodash": {
			"version": "4.17.21",
			"resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
			"integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
		},
		"lodash.assignin": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/lodash.assignin/-/lodash.assignin-4.2.0.tgz",
			"integrity": "sha1-uo31+4QesKPoBEIysOJjqNxqKKI="
		},
		"lodash.bind": {
			"version": "4.2.1",
			"resolved": "https://registry.npmjs.org/lodash.bind/-/lodash.bind-4.2.1.tgz",
			"integrity": "sha1-euMBfpOWIqwxt9fX3LGzTbFpDTU="
		},
		"lodash.defaults": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/lodash.defaults/-/lodash.defaults-4.2.0.tgz",
			"integrity": "sha1-0JF4cW/+pN3p5ft7N/bwgCJ0WAw="
		},
		"lodash.difference": {
			"version": "4.5.0",
			"resolved": "https://registry.npmjs.org/lodash.difference/-/lodash.difference-4.5.0.tgz",
			"integrity": "sha1-nMtOUF1Ia5FlE0V3KIWi3yf9AXw="
		},
		"lodash.filter": {
			"version": "4.6.0",
			"resolved": "https://registry.npmjs.org/lodash.filter/-/lodash.filter-4.6.0.tgz",
			"integrity": "sha1-ZosdSYFgOuHMWm+nYBQ+SAtMSs4="
		},
		"lodash.flatten": {
			"version": "4.4.0",
			"resolved": "https://registry.npmjs.org/lodash.flatten/-/lodash.flatten-4.4.0.tgz",
			"integrity": "sha1-8xwiIlqWMtK7+OSt2+8kCqdlph8="
		},
		"lodash.foreach": {
			"version": "4.5.0",
			"resolved": "https://registry.npmjs.org/lodash.foreach/-/lodash.foreach-4.5.0.tgz",
			"integrity": "sha1-Gmo16s5AEoDH8G3d7DUWWrJ+PlM="
		},
		"lodash.get": {
			"version": "4.4.2",
			"resolved": "https://registry.npmjs.org/lodash.get/-/lodash.get-4.4.2.tgz",
			"integrity": "sha1-LRd/ZS+jHpObRDjVNBSZ36OCXpk="
		},
		"lodash.isplainobject": {
			"version": "4.0.6",
			"resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
			"integrity": "sha1-fFJqUtibRcRcxpC4gWO+BJf1UMs="
		},
		"lodash.map": {
			"version": "4.6.0",
			"resolved": "https://registry.npmjs.org/lodash.map/-/lodash.map-4.6.0.tgz",
			"integrity": "sha1-dx7Hg540c9nEzeKLGTlMNWL09tM="
		},
		"lodash.merge": {
			"version": "4.6.2",
			"resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
			"integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ=="
		},
		"lodash.pad": {
			"version": "4.5.1",
			"resolved": "https://registry.npmjs.org/lodash.pad/-/lodash.pad-4.5.1.tgz",
			"integrity": "sha1-QzCUmoM6fI2iLMIPaibE1Z3runA="
		},
		"lodash.padend": {
			"version": "4.6.1",
			"resolved": "https://registry.npmjs.org/lodash.padend/-/lodash.padend-4.6.1.tgz",
			"integrity": "sha1-U8y6BH0G4VjTEfRdpiX05J5vFm4="
		},
		"lodash.padstart": {
			"version": "4.6.1",
			"resolved": "https://registry.npmjs.org/lodash.padstart/-/lodash.padstart-4.6.1.tgz",
			"integrity": "sha1-0uPuv/DZ05rVD1y9G1KnvOa7YRs="
		},
		"lodash.pick": {
			"version": "4.4.0",
			"resolved": "https://registry.npmjs.org/lodash.pick/-/lodash.pick-4.4.0.tgz",
			"integrity": "sha1-UvBWEP/53tQiYRRB7R/BI6AwAbM="
		},
		"lodash.reduce": {
			"version": "4.6.0",
			"resolved": "https://registry.npmjs.org/lodash.reduce/-/lodash.reduce-4.6.0.tgz",
			"integrity": "sha1-8atrg5KZrUj3hKu/R2WW8DuRTTs="
		},
		"lodash.reject": {
			"version": "4.6.0",
			"resolved": "https://registry.npmjs.org/lodash.reject/-/lodash.reject-4.6.0.tgz",
			"integrity": "sha1-gNZJLcFHCGS79YNTO2UfQqn1JBU="
		},
		"lodash.some": {
			"version": "4.6.0",
			"resolved": "https://registry.npmjs.org/lodash.some/-/lodash.some-4.6.0.tgz",
			"integrity": "sha1-G7nzFO9ri63tE7VJFpsqlF62jk0="
		},
		"lodash.union": {
			"version": "4.6.0",
			"resolved": "https://registry.npmjs.org/lodash.union/-/lodash.union-4.6.0.tgz",
			"integrity": "sha1-SLtQiECfFvGCFmZkHETdGqrjzYg="
		},
		"log-driver": {
			"version": "1.2.7",
			"resolved": "https://registry.npmjs.org/log-driver/-/log-driver-1.2.7.tgz",
			"integrity": "sha512-U7KCmLdqsGHBLeWqYlFA0V0Sl6P08EE1ZrmA9cxjUE0WVqT9qnyVDPz1kzpFEP0jdJuFnasWIfSd7fsaNXkpbg=="
		},
		"log-symbols": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-3.0.0.tgz",
			"integrity": "sha512-dSkNGuI7iG3mfvDzUuYZyvk5dD9ocYCYzNU6CYDE6+Xqd+gwme6Z00NS3dUh8mq/73HaEtT7m6W+yUPtU6BZnQ==",
			"requires": {
				"chalk": "^2.4.2"
			},
			"dependencies": {
				"ansi-styles": {
					"version": "3.2.1",
					"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
					"integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
					"requires": {
						"color-convert": "^1.9.0"
					}
				},
				"chalk": {
					"version": "2.4.2",
					"resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
					"integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
					"requires": {
						"ansi-styles": "^3.2.1",
						"escape-string-regexp": "^1.0.5",
						"supports-color": "^5.3.0"
					}
				},
				"color-convert": {
					"version": "1.9.3",
					"resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
					"integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
					"requires": {
						"color-name": "1.1.3"
					}
				},
				"color-name": {
					"version": "1.1.3",
					"resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
					"integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="
				},
				"escape-string-regexp": {
					"version": "1.0.5",
					"resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
					"integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ="
				},
				"has-flag": {
					"version": "3.0.0",
					"resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
					"integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0="
				},
				"supports-color": {
					"version": "5.5.0",
					"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
					"integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
					"requires": {
						"has-flag": "^3.0.0"
					}
				}
			}
		},
		"lru-cache": {
			"version": "6.0.0",
			"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
			"integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
			"requires": {
				"yallist": "^4.0.0"
			}
		},
		"lyrics-finder": {
			"version": "21.7.0",
			"resolved": "https://registry.npmjs.org/lyrics-finder/-/lyrics-finder-21.7.0.tgz",
			"integrity": "sha512-AMaJ+MdbdemYOWM1Kxd/vzn23OD66/fdemaJWN9dU0qsxK6d09rODSphygAvaGka6mgfHaFlHN+ETHv/d60ftw==",
			"requires": {
				"encoding": "^0.1.13",
				"html-to-text": "^5.1.1",
				"node-fetch": "^2.6.0"
			}
		},
		"m3u8stream": {
			"version": "0.8.3",
			"resolved": "https://registry.npmjs.org/m3u8stream/-/m3u8stream-0.8.3.tgz",
			"integrity": "sha512-0nAcdrF8YJKUkb6PzWdvGftTPyCVWgoiot1AkNVbPKTeIGsWs6DrOjifrJ0Zi8WQfQmD2SuVCjkYIOip12igng==",
			"requires": {
				"miniget": "^4.0.0",
				"sax": "^1.2.4"
			}
		},
		"make-dir": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
			"integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
			"requires": {
				"semver": "^6.0.0"
			},
			"dependencies": {
				"semver": {
					"version": "6.3.0",
					"resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
					"integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
				}
			}
		},
		"media-typer": {
			"version": "0.3.0",
			"resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
			"integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g="
		},
		"meeko": {
			"version": "1.8.159",
			"resolved": "https://registry.npmjs.org/meeko/-/meeko-1.8.159.tgz",
			"integrity": "sha512-VwH4tpaz3e/D6b5HLxaKq91Q4BLPN/oU62c+xrjhU2uJ5pbkwySTjw5ha+Oa3RkIF9lOExkKe4U0whcfV9TqPA=="
		},
		"merge-images": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/merge-images/-/merge-images-2.0.0.tgz",
			"integrity": "sha512-bpI4j54n/Zl6ZTgxaR3xWou/lqI53RAAt8peXijW37BKqoON83LQ7XCZqtFiwzBfEXIws1isYyR06584yffAyA=="
		},
		"mime": {
			"version": "1.6.0",
			"resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
			"integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
		},
		"mime-db": {
			"version": "1.47.0",
			"resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.47.0.tgz",
			"integrity": "sha512-QBmA/G2y+IfeS4oktet3qRZ+P5kPhCKRXxXnQEudYqUaEioAU1/Lq2us3D/t1Jfo4hE9REQPrbB7K5sOczJVIw=="
		},
		"mime-types": {
			"version": "2.1.30",
			"resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.30.tgz",
			"integrity": "sha512-crmjA4bLtR8m9qLpHvgxSChT+XoSlZi8J4n/aIdn3z92e/U47Z0V/yl+Wh9W046GgFVAmoNR/fmdbZYcSSIUeg==",
			"requires": {
				"mime-db": "1.47.0"
			}
		},
		"mimic-fn": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
			"integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg=="
		},
		"mimic-response": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-2.1.0.tgz",
			"integrity": "sha512-wXqjST+SLt7R009ySCglWBCFpjUygmCIfD790/kVbiGmUgfYGuB14PiTd5DwVxSV4NcYHjzMkoj5LjQZwTQLEA=="
		},
		"min-document": {
			"version": "2.19.0",
			"resolved": "https://registry.npmjs.org/min-document/-/min-document-2.19.0.tgz",
			"integrity": "sha1-e9KC4/WELtKVu3SM3Z8f+iyCRoU=",
			"requires": {
				"dom-walk": "^0.1.0"
			}
		},
		"miniget": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/miniget/-/miniget-4.2.0.tgz",
			"integrity": "sha512-IzTOaNgBw/qEpzkPTE7X2cUVXQfSKbG8w52Emi93zb+Zya2ZFrbmavpixzebuDJD9Ku4ecbaFlC7Y1cEESzQtQ=="
		},
		"minimatch": {
			"version": "3.0.4",
			"resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
			"integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
			"requires": {
				"brace-expansion": "^1.1.7"
			}
		},
		"minimist": {
			"version": "1.2.5",
			"resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
			"integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw=="
		},
		"minipass": {
			"version": "3.1.3",
			"resolved": "https://registry.npmjs.org/minipass/-/minipass-3.1.3.tgz",
			"integrity": "sha512-Mgd2GdMVzY+x3IJ+oHnVM+KG3lA5c8tnabyJKmHSaG2kAGpudxuOf8ToDkhumF7UzME7DecbQE9uOZhNm7PuJg==",
			"requires": {
				"yallist": "^4.0.0"
			}
		},
		"minizlib": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/minizlib/-/minizlib-2.1.2.tgz",
			"integrity": "sha512-bAxsR8BVfj60DWXHE3u30oHzfl4G7khkSuPW+qvpd7jFRHm7dLxOjUk1EHACJ/hxLY8phGJ0YhYHZo7jil7Qdg==",
			"requires": {
				"minipass": "^3.0.0",
				"yallist": "^4.0.0"
			}
		},
		"mkdirp": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
			"integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw=="
		},
		"module-details-from-path": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/module-details-from-path/-/module-details-from-path-1.0.3.tgz",
			"integrity": "sha1-EUyUlnPiqKNenTV4hSeqN7Z52is="
		},
		"moment": {
			"version": "2.29.1",
			"resolved": "https://registry.npmjs.org/moment/-/moment-2.29.1.tgz",
			"integrity": "sha512-kHmoybcPV8Sqy59DwNDY3Jefr64lK/by/da0ViFcuA4DH0vQg5Q6Ze5VimxkfQNSC+Mls/Kx53s7TjP1RhFEDQ=="
		},
		"moment-timezone": {
			"version": "0.5.33",
			"resolved": "https://registry.npmjs.org/moment-timezone/-/moment-timezone-0.5.33.tgz",
			"integrity": "sha512-PTc2vcT8K9J5/9rDEPe5czSIKgLoGsH8UNpA4qZTVw0Vd/Uz19geE9abbIOQKaAQFcnQ3v5YEXrbSc5BpshH+w==",
			"requires": {
				"moment": ">= 2.9.0"
			}
		},
		"morsify": {
			"version": "2.4.0",
			"resolved": "https://registry.npmjs.org/morsify/-/morsify-2.4.0.tgz",
			"integrity": "sha512-Ge36bkk6swZggNH6diWK2DOcF+taSCYNMUrifCn3P9rf2LI/FKA3FUe9XgM38kMzeEGM5OHTJmFu52FJN/2M7w=="
		},
		"mqtt": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/mqtt/-/mqtt-3.0.0.tgz",
			"integrity": "sha512-0nKV6MAc1ibKZwaZQUTb3iIdT4NVpj541BsYrqrGBcQdQ7Jd0MnZD1/6/nj1UFdGTboK9ZEUXvkCu2nPCugHFA==",
			"requires": {
				"base64-js": "^1.3.0",
				"commist": "^1.0.0",
				"concat-stream": "^1.6.2",
				"end-of-stream": "^1.4.1",
				"es6-map": "^0.1.5",
				"help-me": "^1.0.1",
				"inherits": "^2.0.3",
				"minimist": "^1.2.0",
				"mqtt-packet": "^6.0.0",
				"pump": "^3.0.0",
				"readable-stream": "^2.3.6",
				"reinterval": "^1.1.0",
				"split2": "^3.1.0",
				"websocket-stream": "^5.1.2",
				"xtend": "^4.0.1"
			}
		},
		"mqtt-packet": {
			"version": "6.10.0",
			"resolved": "https://registry.npmjs.org/mqtt-packet/-/mqtt-packet-6.10.0.tgz",
			"integrity": "sha512-ja8+mFKIHdB1Tpl6vac+sktqy3gA8t9Mduom1BA75cI+R9AHnZOiaBQwpGiWnaVJLDGRdNhQmFaAqd7tkKSMGA==",
			"requires": {
				"bl": "^4.0.2",
				"debug": "^4.1.1",
				"process-nextick-args": "^2.0.1"
			},
			"dependencies": {
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				}
			}
		},
		"ms": {
			"version": "2.1.3",
			"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
			"integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
		},
		"mute-stream": {
			"version": "0.0.8",
			"resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.8.tgz",
			"integrity": "sha512-nnbWWOkoWyUsTjKrhgD0dcz22mdkSnpYqbEjIm2nhwhuxlSkpywJmBo8h0ZqJdkp73mb90SssHkN4rsRaBAfAA=="
		},
		"nan": {
			"version": "2.14.2",
			"resolved": "https://registry.npmjs.org/nan/-/nan-2.14.2.tgz",
			"integrity": "sha512-M2ufzIiINKCuDfBSAUr1vWQ+vuVcA9kqx8JJUsbQi6yf1uGRyb7HfpdfUr5qLXf3B/t8dPvcjhKMmlfnP47EzQ=="
		},
		"needle": {
			"version": "2.4.0",
			"resolved": "https://registry.npmjs.org/needle/-/needle-2.4.0.tgz",
			"integrity": "sha512-4Hnwzr3mi5L97hMYeNl8wRW/Onhy4nUKR/lVemJ8gJedxxUyBLm9kkrDColJvoSfwi0jCNhD+xCdOtiGDQiRZg==",
			"requires": {
				"debug": "^3.2.6",
				"iconv-lite": "^0.4.4",
				"sax": "^1.2.4"
			},
			"dependencies": {
				"debug": {
					"version": "3.2.7",
					"resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
					"integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
					"requires": {
						"ms": "^2.1.1"
					}
				}
			}
		},
		"netmask": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/netmask/-/netmask-2.0.2.tgz",
			"integrity": "sha512-dBpDMdxv9Irdq66304OLfEmQ9tbNRFnFTuZiLo+bD+r332bBmMJ8GBLXklIXXgxd3+v9+KUnZaUR5PJMa75Gsg=="
		},
		"next-tick": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/next-tick/-/next-tick-1.0.0.tgz",
			"integrity": "sha1-yobR/ogoFpsBICCOPchCS524NCw="
		},
		"node-addon-api": {
			"version": "3.2.0",
			"resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-3.2.0.tgz",
			"integrity": "sha512-kcwSAWhPi4+QzAtsL2+2s/awvDo2GKLsvMCwNRxb5BUshteXU8U97NCyvQDsGKs/m0He9WcG4YWew/BnuLx++w=="
		},
		"node-cmd": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/node-cmd/-/node-cmd-4.0.0.tgz",
			"integrity": "sha512-3OHy8KI8MuwADyugQRZBsaqe3c0r3yxQSoLsDBVk7vAjPmfG01512MPBQjfmBJxrH+2qURbiBf/ZyoimrhdA6A=="
		},
		"node-fetch": {
			"version": "2.6.1",
			"resolved": "https://registry.npmjs.org/node-fetch/-/node-fetch-2.6.1.tgz",
			"integrity": "sha512-V4aYg89jEoVRxRb2fJdAg8FHvI7cEyYdVAh94HH0UIK8oJxUfkjlDQN9RbMx+bEjP7+ggMiFRprSti032Oipxw=="
		},
		"node-gyp": {
			"version": "3.8.0",
			"resolved": "https://registry.npmjs.org/node-gyp/-/node-gyp-3.8.0.tgz",
			"integrity": "sha512-3g8lYefrRRzvGeSowdJKAKyks8oUpLEd/DyPV4eMhVlhJ0aNaZqIrNUIPuEWWTAoPqyFkfGrM67MC69baqn6vA==",
			"optional": true,
			"requires": {
				"fstream": "^1.0.0",
				"glob": "^7.0.3",
				"graceful-fs": "^4.1.2",
				"mkdirp": "^0.5.0",
				"nopt": "2 || 3",
				"npmlog": "0 || 1 || 2 || 3 || 4",
				"osenv": "0",
				"request": "^2.87.0",
				"rimraf": "2",
				"semver": "~5.3.0",
				"tar": "^2.0.0",
				"which": "1"
			},
			"dependencies": {
				"mkdirp": {
					"version": "0.5.5",
					"resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
					"integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
					"optional": true,
					"requires": {
						"minimist": "^1.2.5"
					}
				},
				"nopt": {
					"version": "3.0.6",
					"resolved": "https://registry.npmjs.org/nopt/-/nopt-3.0.6.tgz",
					"integrity": "sha1-xkZdvwirzU2zWTF/eaxopkayj/k=",
					"optional": true,
					"requires": {
						"abbrev": "1"
					}
				},
				"rimraf": {
					"version": "2.7.1",
					"resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
					"integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
					"optional": true,
					"requires": {
						"glob": "^7.1.3"
					}
				},
				"semver": {
					"version": "5.3.0",
					"resolved": "https://registry.npmjs.org/semver/-/semver-5.3.0.tgz",
					"integrity": "sha1-myzl094C0XxgEq0yaqa00M9U+U8=",
					"optional": true
				},
				"tar": {
					"version": "2.2.2",
					"resolved": "https://registry.npmjs.org/tar/-/tar-2.2.2.tgz",
					"integrity": "sha512-FCEhQ/4rE1zYv9rYXJw/msRqsnmlje5jHP6huWeBZ704jUTy02c5AZyWujpMR1ax6mVw9NyJMfuK2CMDWVIfgA==",
					"optional": true,
					"requires": {
						"block-stream": "*",
						"fstream": "^1.0.12",
						"inherits": "2"
					}
				}
			}
		},
		"node-superfetch": {
			"version": "0.2.3",
			"resolved": "https://registry.npmjs.org/node-superfetch/-/node-superfetch-0.2.3.tgz",
			"integrity": "sha512-xOqifvw/3N+tIeeC80/TNJXkoxDZm8JWc7/0VBkJ86ttQTlJvoicuVaeJlKKHYRlmC2O6ygNIhNPwLYX4bxqdA==",
			"requires": {
				"form-data": "^4.0.0",
				"node-fetch": "^2.6.1"
			},
			"dependencies": {
				"form-data": {
					"version": "4.0.0",
					"resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.0.tgz",
					"integrity": "sha512-ETEklSGi5t0QMZuiXoA/Q6vcnxcLQP5vdugSpuAyi6SVGi2clPPp+xgEhuMaHC+zGgn31Kd235W35f7Hykkaww==",
					"requires": {
						"asynckit": "^0.4.0",
						"combined-stream": "^1.0.8",
						"mime-types": "^2.1.12"
					}
				}
			}
		},
		"nopt": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/nopt/-/nopt-5.0.0.tgz",
			"integrity": "sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==",
			"requires": {
				"abbrev": "1"
			}
		},
		"normalize-path": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
			"integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="
		},
		"npm-bundled": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/npm-bundled/-/npm-bundled-1.1.2.tgz",
			"integrity": "sha512-x5DHup0SuyQcmL3s7Rx/YQ8sbw/Hzg0rj48eN0dV7hf5cmQq5PXIeioroH3raV1QC1yh3uTYuMThvEQF3iKgGQ==",
			"requires": {
				"npm-normalize-package-bin": "^1.0.1"
			}
		},
		"npm-normalize-package-bin": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/npm-normalize-package-bin/-/npm-normalize-package-bin-1.0.1.tgz",
			"integrity": "sha512-EPfafl6JL5/rU+ot6P3gRSCpPDW5VmIzX959Ob1+ySFUuuYHWHekXpwdUZcKP5C+DS4GEtdJluwBjnsNDl+fSA=="
		},
		"npm-packlist": {
			"version": "1.4.8",
			"resolved": "https://registry.npmjs.org/npm-packlist/-/npm-packlist-1.4.8.tgz",
			"integrity": "sha512-5+AZgwru5IevF5ZdnFglB5wNlHG1AOOuw28WhUq8/8emhBmLv6jX5by4WJCh7lW0uSYZYS6DXqIsyZVIXRZU9A==",
			"requires": {
				"ignore-walk": "^3.0.1",
				"npm-bundled": "^1.0.1",
				"npm-normalize-package-bin": "^1.0.1"
			}
		},
		"npmlog": {
			"version": "4.1.2",
			"resolved": "https://registry.npmjs.org/npmlog/-/npmlog-4.1.2.tgz",
			"integrity": "sha512-2uUqazuKlTaSI/dC8AzicUck7+IrEaOnN/e0jd3Xtt1KcGpwx30v50mL7oPyr/h9bL3E4aZccVwpwP+5W9Vjkg==",
			"requires": {
				"are-we-there-yet": "~1.1.2",
				"console-control-strings": "~1.1.0",
				"gauge": "~2.7.3",
				"set-blocking": "~2.0.0"
			}
		},
		"nssocket": {
			"version": "0.6.0",
			"resolved": "https://registry.npmjs.org/nssocket/-/nssocket-0.6.0.tgz",
			"integrity": "sha1-Wflvb/MhVm8zxw99vu7N/cBxVPo=",
			"requires": {
				"eventemitter2": "~0.4.14",
				"lazy": "~1.0.11"
			},
			"dependencies": {
				"eventemitter2": {
					"version": "0.4.14",
					"resolved": "https://registry.npmjs.org/eventemitter2/-/eventemitter2-0.4.14.tgz",
					"integrity": "sha1-j2G3XN4BKy6esoTUVFWDtWQ7Yas="
				}
			}
		},
		"nth-check": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/nth-check/-/nth-check-1.0.2.tgz",
			"integrity": "sha512-WeBOdju8SnzPN5vTUJYxYUxLeXpCaVP5i5e0LF8fg7WORF2Wd7wFX/pk0tYZk7s8T+J7VLy0Da6J1+wCT0AtHg==",
			"requires": {
				"boolbase": "~1.0.0"
			}
		},
		"number-is-nan": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/number-is-nan/-/number-is-nan-1.0.1.tgz",
			"integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0="
		},
		"nwsapi": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.0.tgz",
			"integrity": "sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ=="
		},
		"oauth-sign": {
			"version": "0.9.0",
			"resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
			"integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ=="
		},
		"object-assign": {
			"version": "4.1.1",
			"resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
			"integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
		},
		"omggif": {
			"version": "1.0.10",
			"resolved": "https://registry.npmjs.org/omggif/-/omggif-1.0.10.tgz",
			"integrity": "sha512-LMJTtvgc/nugXj0Vcrrs68Mn2D1r0zf630VNtqtpI1FEO7e+O9FP4gqs9AcnBaSEeoHIPm28u6qgPR0oyEpGSw=="
		},
		"on-finished": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
			"integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
			"requires": {
				"ee-first": "1.1.1"
			}
		},
		"once": {
			"version": "1.4.0",
			"resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
			"integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
			"requires": {
				"wrappy": "1"
			}
		},
		"onetime": {
			"version": "5.1.2",
			"resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
			"integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
			"requires": {
				"mimic-fn": "^2.1.0"
			}
		},
		"optionator": {
			"version": "0.8.3",
			"resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz",
			"integrity": "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==",
			"requires": {
				"deep-is": "~0.1.3",
				"fast-levenshtein": "~2.0.6",
				"levn": "~0.3.0",
				"prelude-ls": "~1.1.2",
				"type-check": "~0.3.2",
				"word-wrap": "~1.2.3"
			}
		},
		"ora": {
			"version": "4.1.1",
			"resolved": "https://registry.npmjs.org/ora/-/ora-4.1.1.tgz",
			"integrity": "sha512-sjYP8QyVWBpBZWD6Vr1M/KwknSw6kJOz41tvGMlwWeClHBtYKTbHMki1PsLZnxKpXMPbTKv9b3pjQu3REib96A==",
			"requires": {
				"chalk": "^3.0.0",
				"cli-cursor": "^3.1.0",
				"cli-spinners": "^2.2.0",
				"is-interactive": "^1.0.0",
				"log-symbols": "^3.0.0",
				"mute-stream": "0.0.8",
				"strip-ansi": "^6.0.0",
				"wcwidth": "^1.0.1"
			},
			"dependencies": {
				"ansi-regex": {
					"version": "5.0.0",
					"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.0.tgz",
					"integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg=="
				},
				"chalk": {
					"version": "3.0.0",
					"resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
					"integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
					"requires": {
						"ansi-styles": "^4.1.0",
						"supports-color": "^7.1.0"
					}
				},
				"strip-ansi": {
					"version": "6.0.0",
					"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.0.tgz",
					"integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
					"requires": {
						"ansi-regex": "^5.0.0"
					}
				}
			}
		},
		"ordered-read-streams": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/ordered-read-streams/-/ordered-read-streams-1.0.1.tgz",
			"integrity": "sha1-d8DLN8QVJdZBZtmQ/61+xqDhNj4=",
			"requires": {
				"readable-stream": "^2.0.1"
			}
		},
		"os-homedir": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/os-homedir/-/os-homedir-1.0.2.tgz",
			"integrity": "sha1-/7xJiDNuDoM94MFox+8VISGqf7M="
		},
		"os-tmpdir": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
			"integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ="
		},
		"osenv": {
			"version": "0.1.5",
			"resolved": "https://registry.npmjs.org/osenv/-/osenv-0.1.5.tgz",
			"integrity": "sha512-0CWcCECdMVc2Rw3U5w9ZjqX6ga6ubk1xDVKxtBQPK7wis/0F2r9T6k4ydGYhecl7YUBxBVxhL5oisPsNxAPe2g==",
			"requires": {
				"os-homedir": "^1.0.0",
				"os-tmpdir": "^1.0.0"
			}
		},
		"p-limit": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
			"integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
			"requires": {
				"p-try": "^2.0.0"
			}
		},
		"p-locate": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/p-locate/-/p-locate-3.0.0.tgz",
			"integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
			"requires": {
				"p-limit": "^2.0.0"
			}
		},
		"p-try": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
			"integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="
		},
		"pac-proxy-agent": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/pac-proxy-agent/-/pac-proxy-agent-4.1.0.tgz",
			"integrity": "sha512-ejNgYm2HTXSIYX9eFlkvqFp8hyJ374uDf0Zq5YUAifiSh1D6fo+iBivQZirGvVv8dCYUsLhmLBRhlAYvBKI5+Q==",
			"requires": {
				"@tootallnate/once": "1",
				"agent-base": "6",
				"debug": "4",
				"get-uri": "3",
				"http-proxy-agent": "^4.0.1",
				"https-proxy-agent": "5",
				"pac-resolver": "^4.1.0",
				"raw-body": "^2.2.0",
				"socks-proxy-agent": "5"
			},
			"dependencies": {
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				}
			}
		},
		"pac-resolver": {
			"version": "4.2.0",
			"resolved": "https://registry.npmjs.org/pac-resolver/-/pac-resolver-4.2.0.tgz",
			"integrity": "sha512-rPACZdUyuxT5Io/gFKUeeZFfE5T7ve7cAkE5TUZRRfuKP0u5Hocwe48X7ZEm6mYB+bTB0Qf+xlVlA/RM/i6RCQ==",
			"requires": {
				"degenerator": "^2.2.0",
				"ip": "^1.1.5",
				"netmask": "^2.0.1"
			}
		},
		"pako": {
			"version": "0.2.9",
			"resolved": "https://registry.npmjs.org/pako/-/pako-0.2.9.tgz",
			"integrity": "sha1-8/dSL073gjSNqBYbrZ7P1Rv4OnU="
		},
		"parse-bmfont-ascii": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/parse-bmfont-ascii/-/parse-bmfont-ascii-1.0.6.tgz",
			"integrity": "sha1-Eaw8P/WPfCAgqyJ2kHkQjU36AoU="
		},
		"parse-bmfont-binary": {
			"version": "1.0.6",
			"resolved": "https://registry.npmjs.org/parse-bmfont-binary/-/parse-bmfont-binary-1.0.6.tgz",
			"integrity": "sha1-0Di0dtPp3Z2x4RoLDlOiJ5K2kAY="
		},
		"parse-bmfont-xml": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/parse-bmfont-xml/-/parse-bmfont-xml-1.1.4.tgz",
			"integrity": "sha512-bjnliEOmGv3y1aMEfREMBJ9tfL3WR0i0CKPj61DnSLaoxWR3nLrsQrEbCId/8rF4NyRF0cCqisSVXyQYWM+mCQ==",
			"requires": {
				"xml-parse-from-string": "^1.0.0",
				"xml2js": "^0.4.5"
			}
		},
		"parse-headers": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/parse-headers/-/parse-headers-2.0.3.tgz",
			"integrity": "sha512-QhhZ+DCCit2Coi2vmAKbq5RGTRcQUOE2+REgv8vdyu7MnYx2eZztegqtTx99TZ86GTIwqiy3+4nQTWZ2tgmdCA=="
		},
		"parse-ms": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/parse-ms/-/parse-ms-3.0.0.tgz",
			"integrity": "sha512-Tpb8Z7r7XbbtBTrM9UhpkzzaMrqA2VXMT3YChzYltwV3P3pM6t8wl7TvpMnSTosz1aQAdVib7kdoys7vYOPerw=="
		},
		"parse5": {
			"version": "6.0.1",
			"resolved": "https://registry.npmjs.org/parse5/-/parse5-6.0.1.tgz",
			"integrity": "sha512-Ofn/CTFzRGTTxwpNEs9PP93gXShHcTq255nzRYSKe8AkVpZY7e1fpmTfOyoIvjP5HG7Z2ZM7VS9PPhQGW2pOpw=="
		},
		"path": {
			"version": "0.12.7",
			"resolved": "https://registry.npmjs.org/path/-/path-0.12.7.tgz",
			"integrity": "sha1-1NwqUGxM4hl+tIHr/NWzbAFAsQ8=",
			"requires": {
				"process": "^0.11.1",
				"util": "^0.10.3"
			}
		},
		"path-dirname": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/path-dirname/-/path-dirname-1.0.2.tgz",
			"integrity": "sha1-zDPSTVJeCZpTiMAzbG4yuRYGCeA="
		},
		"path-exists": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/path-exists/-/path-exists-3.0.0.tgz",
			"integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU="
		},
		"path-is-absolute": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
			"integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
		},
		"path-parse": {
			"version": "1.0.7",
			"resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
			"integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw=="
		},
		"performance-now": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
			"integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns="
		},
		"phin": {
			"version": "2.9.3",
			"resolved": "https://registry.npmjs.org/phin/-/phin-2.9.3.tgz",
			"integrity": "sha512-CzFr90qM24ju5f88quFC/6qohjC144rehe5n6DH900lgXmUe86+xCKc10ev56gRKC4/BkHUoG4uSiQgBiIXwDA=="
		},
		"picomatch": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.0.tgz",
			"integrity": "sha512-lY1Q/PiJGC2zOv/z391WOTD+Z02bCgsFfvxoXXf6h7kv9o+WmsmzYqrAwY63sNgOxE4xEdq0WyUnXfKeBrSvYw=="
		},
		"pidusage": {
			"version": "2.0.21",
			"resolved": "https://registry.npmjs.org/pidusage/-/pidusage-2.0.21.tgz",
			"integrity": "sha512-cv3xAQos+pugVX+BfXpHsbyz/dLzX+lr44zNMsYiGxUw+kV5sgQCIcLd1z+0vq+KyC7dJ+/ts2PsfgWfSC3WXA==",
			"requires": {
				"safe-buffer": "^5.2.1"
			},
			"dependencies": {
				"safe-buffer": {
					"version": "5.2.1",
					"resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
					"integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="
				}
			}
		},
		"pixelmatch": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/pixelmatch/-/pixelmatch-4.0.2.tgz",
			"integrity": "sha1-j0fc7FARtHe2fbA8JDvB8wheiFQ=",
			"requires": {
				"pngjs": "^3.0.0"
			}
		},
		"pm2": {
			"version": "5.0.4",
			"resolved": "https://registry.npmjs.org/pm2/-/pm2-5.0.4.tgz",
			"integrity": "sha512-/g4yCfCgdK0FJR2c92D0ZqmeUzpJ4y1yMU5adcg6qWTBoEfnCL3n84fA96ug5yVHQ1ehSdMTTbZfdVIdCi53rQ==",
			"requires": {
				"@pm2/agent": "~2.0.0",
				"@pm2/io": "~5.0.0",
				"@pm2/js-api": "~0.6.7",
				"@pm2/pm2-version-check": "^1.0.4",
				"async": "~3.2.0",
				"blessed": "0.1.81",
				"chalk": "3.0.0",
				"chokidar": "^3.5.1",
				"cli-tableau": "^2.0.0",
				"commander": "2.15.1",
				"cron": "1.8.2",
				"dayjs": "~1.8.25",
				"debug": "^4.3.1",
				"enquirer": "2.3.6",
				"eventemitter2": "5.0.1",
				"fast-printf": "^1.3.0",
				"fclone": "1.0.11",
				"mkdirp": "1.0.4",
				"needle": "2.4.0",
				"pidusage": "2.0.21",
				"pm2-axon": "~4.0.1",
				"pm2-axon-rpc": "~0.7.1",
				"pm2-deploy": "~1.0.2",
				"pm2-multimeter": "^0.1.2",
				"pm2-sysmonit": "^1.2.8",
				"promptly": "^2",
				"semver": "^7.2",
				"source-map-support": "0.5.19",
				"vizion": "~2.2.1",
				"yamljs": "0.3.0"
			},
			"dependencies": {
				"chalk": {
					"version": "3.0.0",
					"resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
					"integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
					"requires": {
						"ansi-styles": "^4.1.0",
						"supports-color": "^7.1.0"
					}
				},
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				}
			}
		},
		"pm2-axon": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/pm2-axon/-/pm2-axon-4.0.1.tgz",
			"integrity": "sha512-kES/PeSLS8orT8dR5jMlNl+Yu4Ty3nbvZRmaAtROuVm9nYYGiaoXqqKQqQYzWQzMYWUKHMQTvBlirjE5GIIxqg==",
			"requires": {
				"amp": "~0.3.1",
				"amp-message": "~0.1.1",
				"debug": "^4.3.1",
				"escape-string-regexp": "^4.0.0"
			},
			"dependencies": {
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				}
			}
		},
		"pm2-axon-rpc": {
			"version": "0.7.1",
			"resolved": "https://registry.npmjs.org/pm2-axon-rpc/-/pm2-axon-rpc-0.7.1.tgz",
			"integrity": "sha512-FbLvW60w+vEyvMjP/xom2UPhUN/2bVpdtLfKJeYM3gwzYhoTEEChCOICfFzxkxuoEleOlnpjie+n1nue91bDQw==",
			"requires": {
				"debug": "^4.3.1"
			},
			"dependencies": {
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				}
			}
		},
		"pm2-deploy": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/pm2-deploy/-/pm2-deploy-1.0.2.tgz",
			"integrity": "sha512-YJx6RXKrVrWaphEYf++EdOOx9EH18vM8RSZN/P1Y+NokTKqYAca/ejXwVLyiEpNju4HPZEk3Y2uZouwMqUlcgg==",
			"requires": {
				"run-series": "^1.1.8",
				"tv4": "^1.3.0"
			}
		},
		"pm2-multimeter": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/pm2-multimeter/-/pm2-multimeter-0.1.2.tgz",
			"integrity": "sha1-Gh5VFT1BoFU0zqI8/oYKuqDrSs4=",
			"requires": {
				"charm": "~0.1.1"
			}
		},
		"pm2-sysmonit": {
			"version": "1.2.8",
			"resolved": "https://registry.npmjs.org/pm2-sysmonit/-/pm2-sysmonit-1.2.8.tgz",
			"integrity": "sha512-ACOhlONEXdCTVwKieBIQLSi2tQZ8eKinhcr9JpZSUAL8Qy0ajIgRtsLxG/lwPOW3JEKqPyw/UaHmTWhUzpP4kA==",
			"optional": true,
			"requires": {
				"async": "^3.2.0",
				"debug": "^4.3.1",
				"pidusage": "^2.0.21",
				"systeminformation": "^5.7",
				"tx2": "~1.0.4"
			},
			"dependencies": {
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"optional": true,
					"requires": {
						"ms": "2.1.2"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
					"optional": true
				}
			}
		},
		"pngjs": {
			"version": "3.4.0",
			"resolved": "https://registry.npmjs.org/pngjs/-/pngjs-3.4.0.tgz",
			"integrity": "sha512-NCrCHhWmnQklfH4MtJMRjZ2a8c80qXeMlQMv2uVp9ISJMTt562SbGd6n2oq0PaPgKm7Z6pL9E2UlLIhC+SHL3w=="
		},
		"prelude-ls": {
			"version": "1.1.2",
			"resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
			"integrity": "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ="
		},
		"process": {
			"version": "0.11.10",
			"resolved": "https://registry.npmjs.org/process/-/process-0.11.10.tgz",
			"integrity": "sha1-czIwDoQBYb2j5podHZGn1LwW8YI="
		},
		"process-nextick-args": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
			"integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag=="
		},
		"progress": {
			"version": "2.0.3",
			"resolved": "https://registry.npmjs.org/progress/-/progress-2.0.3.tgz",
			"integrity": "sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA=="
		},
		"promptly": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/promptly/-/promptly-2.2.0.tgz",
			"integrity": "sha1-KhP6BjaIoqWYOxYf/wEIoH0m/HQ=",
			"requires": {
				"read": "^1.0.4"
			}
		},
		"proxy-agent": {
			"version": "4.0.1",
			"resolved": "https://registry.npmjs.org/proxy-agent/-/proxy-agent-4.0.1.tgz",
			"integrity": "sha512-ODnQnW2jc/FUVwHHuaZEfN5otg/fMbvMxz9nMSUQfJ9JU7q2SZvSULSsjLloVgJOiv9yhc8GlNMKc4GkFmcVEA==",
			"requires": {
				"agent-base": "^6.0.0",
				"debug": "4",
				"http-proxy-agent": "^4.0.0",
				"https-proxy-agent": "^5.0.0",
				"lru-cache": "^5.1.1",
				"pac-proxy-agent": "^4.1.0",
				"proxy-from-env": "^1.0.0",
				"socks-proxy-agent": "^5.0.0"
			},
			"dependencies": {
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"lru-cache": {
					"version": "5.1.1",
					"resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
					"integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
					"requires": {
						"yallist": "^3.0.2"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				},
				"yallist": {
					"version": "3.1.1",
					"resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
					"integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g=="
				}
			}
		},
		"proxy-from-env": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/proxy-from-env/-/proxy-from-env-1.1.0.tgz",
			"integrity": "sha512-D+zkORCbA9f1tdWRK0RaCR3GPv50cMxcrz4X8k5LTSUD1Dkw47mKJEZQNunItRTkWwgtaUSo1RVFRIG9ZXiFYg=="
		},
		"psl": {
			"version": "1.8.0",
			"resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
			"integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ=="
		},
		"pump": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
			"integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
			"requires": {
				"end-of-stream": "^1.1.0",
				"once": "^1.3.1"
			}
		},
		"pumpify": {
			"version": "1.5.1",
			"resolved": "https://registry.npmjs.org/pumpify/-/pumpify-1.5.1.tgz",
			"integrity": "sha512-oClZI37HvuUJJxSKKrC17bZ9Cu0ZYhEAGPsPUy9KlMUmv9dKX2o77RUmq7f3XjIxbwyGwYzbzQ1L2Ks8sIradQ==",
			"requires": {
				"duplexify": "^3.6.0",
				"inherits": "^2.0.3",
				"pump": "^2.0.0"
			},
			"dependencies": {
				"pump": {
					"version": "2.0.1",
					"resolved": "https://registry.npmjs.org/pump/-/pump-2.0.1.tgz",
					"integrity": "sha512-ruPMNRkN3MHP1cWJc9OWr+T/xDP0jhXYCLfJcBuX54hhfIBnaQmAUMfDcG4DM5UMWByBbJY69QSphm3jtDKIkA==",
					"requires": {
						"end-of-stream": "^1.1.0",
						"once": "^1.3.1"
					}
				}
			}
		},
		"punycode": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
			"integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A=="
		},
		"qrcode": {
			"version": "1.4.4",
			"resolved": "https://registry.npmjs.org/qrcode/-/qrcode-1.4.4.tgz",
			"integrity": "sha512-oLzEC5+NKFou9P0bMj5+v6Z40evexeE29Z9cummZXZ9QXyMr3lphkURzxjXgPJC5azpxcshoDWV1xE46z+/c3Q==",
			"requires": {
				"buffer": "^5.4.3",
				"buffer-alloc": "^1.2.0",
				"buffer-from": "^1.1.1",
				"dijkstrajs": "^1.0.1",
				"isarray": "^2.0.1",
				"pngjs": "^3.3.0",
				"yargs": "^13.2.4"
			},
			"dependencies": {
				"isarray": {
					"version": "2.0.5",
					"resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.5.tgz",
					"integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw=="
				}
			}
		},
		"qs": {
			"version": "6.7.0",
			"resolved": "https://registry.npmjs.org/qs/-/qs-6.7.0.tgz",
			"integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ=="
		},
		"random": {
			"version": "3.0.6",
			"resolved": "https://registry.npmjs.org/random/-/random-3.0.6.tgz",
			"integrity": "sha512-B53pp/8eFBxULg6sfQgjjmy3vZ2CWVt0Nk4OgkSpvmAf3VXfcEUgGASbNWbXiTiExWe8hCIf5HlddNHzrte9jg==",
			"requires": {
				"seedrandom": "^3.0.5"
			}
		},
		"raw-body": {
			"version": "2.4.0",
			"resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.0.tgz",
			"integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
			"requires": {
				"bytes": "3.1.0",
				"http-errors": "1.7.2",
				"iconv-lite": "0.4.24",
				"unpipe": "1.0.0"
			}
		},
		"rc": {
			"version": "1.2.8",
			"resolved": "https://registry.npmjs.org/rc/-/rc-1.2.8.tgz",
			"integrity": "sha512-y3bGgqKj3QBdxLbLkomlohkvsA8gdAiUQlSBJnBhfn+BPxg4bc62d8TcBW15wavDfgexCgccckhcZvywyQYPOw==",
			"requires": {
				"deep-extend": "^0.6.0",
				"ini": "~1.3.0",
				"minimist": "^1.2.0",
				"strip-json-comments": "~2.0.1"
			}
		},
		"read": {
			"version": "1.0.7",
			"resolved": "https://registry.npmjs.org/read/-/read-1.0.7.tgz",
			"integrity": "sha1-s9oZvQUkMal2cdRKQmNK33ELQMQ=",
			"requires": {
				"mute-stream": "~0.0.4"
			}
		},
		"readable-stream": {
			"version": "2.3.7",
			"resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-2.3.7.tgz",
			"integrity": "sha512-Ebho8K4jIbHAxnuxi7o42OrZgF/ZTNcsZj6nRKyUmkhLFq8CHItp/fy6hQZuZmP/n3yZ9VBUbp4zz/mX8hmYPw==",
			"requires": {
				"core-util-is": "~1.0.0",
				"inherits": "~2.0.3",
				"isarray": "~1.0.0",
				"process-nextick-args": "~2.0.0",
				"safe-buffer": "~5.1.1",
				"string_decoder": "~1.1.1",
				"util-deprecate": "~1.0.1"
			}
		},
		"readdirp": {
			"version": "3.5.0",
			"resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.5.0.tgz",
			"integrity": "sha512-cMhu7c/8rdhkHXWsY+osBhfSy0JikwpHK/5+imo+LpeasTF8ouErHrlYkwT0++njiyuDvc7OFY5T3ukvZ8qmFQ==",
			"requires": {
				"picomatch": "^2.2.1"
			}
		},
		"readline": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/readline/-/readline-1.3.0.tgz",
			"integrity": "sha1-xYDXfvLPyHUrEySYBg3JeTp6wBw="
		},
		"regenerator-runtime": {
			"version": "0.13.7",
			"resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.7.tgz",
			"integrity": "sha512-a54FxoJDIr27pgf7IgeQGxmqUNYrcV338lf/6gH456HZ/PhX+5BcwHXG9ajESmwe6WRO0tAzRUrRmNONWgkrew=="
		},
		"reinterval": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/reinterval/-/reinterval-1.1.0.tgz",
			"integrity": "sha1-M2Hs+jymwYKDOA3Qu5VG85D17Oc="
		},
		"remove-trailing-separator": {
			"version": "1.1.0",
			"resolved": "https://registry.npmjs.org/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
			"integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8="
		},
		"request": {
			"version": "2.88.2",
			"resolved": "https://registry.npmjs.org/request/-/request-2.88.2.tgz",
			"integrity": "sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==",
			"requires": {
				"aws-sign2": "~0.7.0",
				"aws4": "^1.8.0",
				"caseless": "~0.12.0",
				"combined-stream": "~1.0.6",
				"extend": "~3.0.2",
				"forever-agent": "~0.6.1",
				"form-data": "~2.3.2",
				"har-validator": "~5.1.3",
				"http-signature": "~1.2.0",
				"is-typedarray": "~1.0.0",
				"isstream": "~0.1.2",
				"json-stringify-safe": "~5.0.1",
				"mime-types": "~2.1.19",
				"oauth-sign": "~0.9.0",
				"performance-now": "^2.1.0",
				"qs": "~6.5.2",
				"safe-buffer": "^5.1.2",
				"tough-cookie": "~2.5.0",
				"tunnel-agent": "^0.6.0",
				"uuid": "^3.3.2"
			},
			"dependencies": {
				"qs": {
					"version": "6.5.2",
					"resolved": "https://registry.npmjs.org/qs/-/qs-6.5.2.tgz",
					"integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA=="
				}
			}
		},
		"request-promise": {
			"version": "4.2.6",
			"resolved": "https://registry.npmjs.org/request-promise/-/request-promise-4.2.6.tgz",
			"integrity": "sha512-HCHI3DJJUakkOr8fNoCc73E5nU5bqITjOYFMDrKHYOXWXrgD/SBaC7LjwuPymUprRyuF06UK7hd/lMHkmUXglQ==",
			"requires": {
				"bluebird": "^3.5.0",
				"request-promise-core": "1.1.4",
				"stealthy-require": "^1.1.1",
				"tough-cookie": "^2.3.3"
			},
			"dependencies": {
				"bluebird": {
					"version": "3.7.2",
					"resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.7.2.tgz",
					"integrity": "sha512-XpNj6GDQzdfW+r2Wnn7xiSAd7TM3jzkxGXBGTtWKuSXv1xUV+azxAm8jdWZN06QTQk+2N2XB9jRDkvbmQmcRtg=="
				}
			}
		},
		"request-promise-core": {
			"version": "1.1.4",
			"resolved": "https://registry.npmjs.org/request-promise-core/-/request-promise-core-1.1.4.tgz",
			"integrity": "sha512-TTbAfBBRdWD7aNNOoVOBH4pN/KigV6LyapYNNlAPA8JwbovRti1E88m3sYAwsLi5ryhPKsE9APwnjFTgdUjTpw==",
			"requires": {
				"lodash": "^4.17.19"
			}
		},
		"request-promise-native": {
			"version": "1.0.9",
			"resolved": "https://registry.npmjs.org/request-promise-native/-/request-promise-native-1.0.9.tgz",
			"integrity": "sha512-wcW+sIUiWnKgNY0dqCpOZkUbF/I+YPi+f09JZIDa39Ec+q82CpSYniDp+ISgTTbKmnpJWASeJBPZmoxH84wt3g==",
			"requires": {
				"request-promise-core": "1.1.4",
				"stealthy-require": "^1.1.1",
				"tough-cookie": "^2.3.3"
			}
		},
		"require-directory": {
			"version": "2.1.1",
			"resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
			"integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I="
		},
		"require-in-the-middle": {
			"version": "5.1.0",
			"resolved": "https://registry.npmjs.org/require-in-the-middle/-/require-in-the-middle-5.1.0.tgz",
			"integrity": "sha512-M2rLKVupQfJ5lf9OvqFGIT+9iVLnTmjgbOmpil12hiSQNn5zJTKGPoIisETNjfK+09vP3rpm1zJajmErpr2sEQ==",
			"requires": {
				"debug": "^4.1.1",
				"module-details-from-path": "^1.0.3",
				"resolve": "^1.12.0"
			},
			"dependencies": {
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				}
			}
		},
		"require-main-filename": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/require-main-filename/-/require-main-filename-2.0.0.tgz",
			"integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg=="
		},
		"resolve": {
			"version": "1.20.0",
			"resolved": "https://registry.npmjs.org/resolve/-/resolve-1.20.0.tgz",
			"integrity": "sha512-wENBPt4ySzg4ybFQW2TT1zMQucPK95HSh/nq2CFTZVOGut2+pQvSsgtda4d26YrYcr067wjbmzOG8byDPBX63A==",
			"requires": {
				"is-core-module": "^2.2.0",
				"path-parse": "^1.0.6"
			}
		},
		"restore-cursor": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-3.1.0.tgz",
			"integrity": "sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==",
			"requires": {
				"onetime": "^5.1.0",
				"signal-exit": "^3.0.2"
			}
		},
		"retry-as-promised": {
			"version": "3.2.0",
			"resolved": "https://registry.npmjs.org/retry-as-promised/-/retry-as-promised-3.2.0.tgz",
			"integrity": "sha512-CybGs60B7oYU/qSQ6kuaFmRd9sTZ6oXSc0toqePvV74Ac6/IFZSI1ReFQmtCN+uvW1Mtqdwpvt/LGOiCBAY2Mg==",
			"requires": {
				"any-promise": "^1.3.0"
			}
		},
		"rimraf": {
			"version": "3.0.2",
			"resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
			"integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
			"requires": {
				"glob": "^7.1.3"
			}
		},
		"run-series": {
			"version": "1.1.9",
			"resolved": "https://registry.npmjs.org/run-series/-/run-series-1.1.9.tgz",
			"integrity": "sha512-Arc4hUN896vjkqCYrUXquBFtRZdv1PfLbTYP71efP6butxyQ0kWpiNJyAgsxscmQg1cqvHY32/UCBzXedTpU2g=="
		},
		"rxjs": {
			"version": "6.6.7",
			"resolved": "https://registry.npmjs.org/rxjs/-/rxjs-6.6.7.tgz",
			"integrity": "sha512-hTdwr+7yYNIT5n4AMYp85KA6yw2Va0FLa3Rguvbpa4W3I5xynaBZo41cM3XM+4Q6fRMj3sBYIR1VAmZMXYJvRQ==",
			"requires": {
				"tslib": "^1.9.0"
			},
			"dependencies": {
				"tslib": {
					"version": "1.14.1",
					"resolved": "https://registry.npmjs.org/tslib/-/tslib-1.14.1.tgz",
					"integrity": "sha512-Xni35NKzjgMrwevysHTCArtLDpPvye8zV/0E4EyYn43P7/7qvQwPh9BGkHewbMulVntbigmcT7rdX3BNo9wRJg=="
				}
			}
		},
		"safe-browse-url-lookup": {
			"version": "0.1.1",
			"resolved": "https://registry.npmjs.org/safe-browse-url-lookup/-/safe-browse-url-lookup-0.1.1.tgz",
			"integrity": "sha512-pQoFR1o8MC42wgp/zWDFvtQfm8haFfUUwXATp6l7A+K3Kk5Faak/Ia9m1igY8hchFpfl22zAZbX5K+NVCoyw7A==",
			"requires": {
				"axios": "^0.21.1"
			}
		},
		"safe-buffer": {
			"version": "5.1.2",
			"resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
			"integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
		},
		"safer-buffer": {
			"version": "2.1.2",
			"resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
			"integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
		},
		"sagiri": {
			"version": "3.1.1",
			"resolved": "https://registry.npmjs.org/sagiri/-/sagiri-3.1.1.tgz",
			"integrity": "sha512-mT5OBK1xsAL9QZnP7lEmnyT6C+sAzOCRDIbClxHGyWCRXFiN+pl6z0Q0o9VNZD22typLUIbsDIyvI+75vlFAGA==",
			"requires": {
				"bent": "^7.0.4",
				"debug": "^4.1.1",
				"form-data": "^3.0.0"
			},
			"dependencies": {
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"form-data": {
					"version": "3.0.1",
					"resolved": "https://registry.npmjs.org/form-data/-/form-data-3.0.1.tgz",
					"integrity": "sha512-RHkBKtLWUVwd7SqRIvCZMEvAMoGUp0XU+seQiZejj0COz3RI3hWP4sCv3gZWWLjJTd7rGwcsF5eKZGii0r/hbg==",
					"requires": {
						"asynckit": "^0.4.0",
						"combined-stream": "^1.0.8",
						"mime-types": "^2.1.12"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				}
			}
		},
		"sax": {
			"version": "1.2.4",
			"resolved": "https://registry.npmjs.org/sax/-/sax-1.2.4.tgz",
			"integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw=="
		},
		"saxes": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/saxes/-/saxes-5.0.1.tgz",
			"integrity": "sha512-5LBh1Tls8c9xgGjw3QrMwETmTMVk0oFgvrFSvWx62llR2hcEInrKNZ2GZCCuuy2lvWrdl5jhbpeqc5hRYKFOcw==",
			"requires": {
				"xmlchars": "^2.2.0"
			}
		},
		"seedrandom": {
			"version": "3.0.5",
			"resolved": "https://registry.npmjs.org/seedrandom/-/seedrandom-3.0.5.tgz",
			"integrity": "sha512-8OwmbklUNzwezjGInmZ+2clQmExQPvomqjL7LFqOYqtmuxRgQYqOD3mHaU+MvZn5FLUeVxVfQjwLZW/n/JFuqg=="
		},
		"semver": {
			"version": "7.3.5",
			"resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
			"integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
			"requires": {
				"lru-cache": "^6.0.0"
			}
		},
		"sequelize": {
			"version": "6.6.2",
			"resolved": "https://registry.npmjs.org/sequelize/-/sequelize-6.6.2.tgz",
			"integrity": "sha512-H/zrzmTK+tis9PJaSigkuXI57nKBvNCtPQol0yxCvau1iWLzSOuq8t3tMOVeQ+Ep8QH2HoD9/+FCCIAqzUr/BQ==",
			"requires": {
				"debug": "^4.1.1",
				"dottie": "^2.0.0",
				"inflection": "1.12.0",
				"lodash": "^4.17.20",
				"moment": "^2.26.0",
				"moment-timezone": "^0.5.31",
				"retry-as-promised": "^3.2.0",
				"semver": "^7.3.2",
				"sequelize-pool": "^6.0.0",
				"toposort-class": "^1.0.1",
				"uuid": "^8.1.0",
				"validator": "^10.11.0",
				"wkx": "^0.5.0"
			},
			"dependencies": {
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				},
				"uuid": {
					"version": "8.3.2",
					"resolved": "https://registry.npmjs.org/uuid/-/uuid-8.3.2.tgz",
					"integrity": "sha512-+NYs2QeMWy+GWFOEm9xnn6HCDp0l7QBD7ml8zLUmJ+93Q5NF0NocErnwkTkXVFNiX3/fpC6afS8Dhb/gz7R7eg=="
				}
			}
		},
		"sequelize-pool": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/sequelize-pool/-/sequelize-pool-6.1.0.tgz",
			"integrity": "sha512-4YwEw3ZgK/tY/so+GfnSgXkdwIJJ1I32uZJztIEgZeAO6HMgj64OzySbWLgxj+tXhZCJnzRfkY9gINw8Ft8ZMg=="
		},
		"set-blocking": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/set-blocking/-/set-blocking-2.0.0.tgz",
			"integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc="
		},
		"setprototypeof": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.1.1.tgz",
			"integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw=="
		},
		"shimmer": {
			"version": "1.2.1",
			"resolved": "https://registry.npmjs.org/shimmer/-/shimmer-1.2.1.tgz",
			"integrity": "sha512-sQTKC1Re/rM6XyFM6fIAGHRPVGvyXfgzIDvzoq608vM+jeyVD0Tu1E6Np0Kc2zAIFWIj963V2800iF/9LPieQw=="
		},
		"signal-exit": {
			"version": "3.0.3",
			"resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.3.tgz",
			"integrity": "sha512-VUJ49FC8U1OxwZLxIbTTrDvLnf/6TDgxZcK8wxR8zs13xpx7xbG60ndBlhNrFi2EMuFRoeDoJO7wthSLq42EjA=="
		},
		"simple-concat": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/simple-concat/-/simple-concat-1.0.1.tgz",
			"integrity": "sha512-cSFtAPtRhljv69IK0hTVZQ+OfE9nePi/rtJmw5UjHeVyVroEqJXP1sFztKUy1qU+xvz3u/sfYJLa947b7nAN2Q=="
		},
		"simple-get": {
			"version": "3.1.0",
			"resolved": "https://registry.npmjs.org/simple-get/-/simple-get-3.1.0.tgz",
			"integrity": "sha512-bCR6cP+aTdScaQCnQKbPKtJOKDp/hj9EDLJo3Nw4y1QksqaovlW/bnptB6/c1e+qmNIDHRK+oXFDdEqBT8WzUA==",
			"requires": {
				"decompress-response": "^4.2.0",
				"once": "^1.3.1",
				"simple-concat": "^1.0.0"
			}
		},
		"simple-youtube-api": {
			"version": "5.2.1",
			"resolved": "https://registry.npmjs.org/simple-youtube-api/-/simple-youtube-api-5.2.1.tgz",
			"integrity": "sha512-vmndP9Bkh35tifn2OwY+th2imSsfYtmDqczgdOW5yEARFzvSoR8VSQFsivJnctfV5QHQUL6VrOpNdbmDRLh9Bg==",
			"requires": {
				"iso8601-duration": "^1.2.0",
				"node-fetch": "^2.6.0"
			}
		},
		"smart-buffer": {
			"version": "4.1.0",
			"resolved": "https://registry.npmjs.org/smart-buffer/-/smart-buffer-4.1.0.tgz",
			"integrity": "sha512-iVICrxOzCynf/SNaBQCw34eM9jROU/s5rzIhpOvzhzuYHfJR/DhZfDkXiZSgKXfgv26HT3Yni3AV/DGw0cGnnw=="
		},
		"socks": {
			"version": "2.6.1",
			"resolved": "https://registry.npmjs.org/socks/-/socks-2.6.1.tgz",
			"integrity": "sha512-kLQ9N5ucj8uIcxrDwjm0Jsqk06xdpBjGNQtpXy4Q8/QY2k+fY7nZH8CARy+hkbG+SGAovmzzuauCpBlb8FrnBA==",
			"requires": {
				"ip": "^1.1.5",
				"smart-buffer": "^4.1.0"
			}
		},
		"socks-proxy-agent": {
			"version": "5.0.0",
			"resolved": "https://registry.npmjs.org/socks-proxy-agent/-/socks-proxy-agent-5.0.0.tgz",
			"integrity": "sha512-lEpa1zsWCChxiynk+lCycKuC502RxDWLKJZoIhnxrWNjLSDGYRFflHA1/228VkRcnv9TIb8w98derGbpKxJRgA==",
			"requires": {
				"agent-base": "6",
				"debug": "4",
				"socks": "^2.3.3"
			},
			"dependencies": {
				"debug": {
					"version": "4.3.1",
					"resolved": "https://registry.npmjs.org/debug/-/debug-4.3.1.tgz",
					"integrity": "sha512-doEwdvm4PCeK4K3RQN2ZC2BYUBaxwLARCqZmMjtF8a51J2Rb0xpVloFRnCODwqjpwnAoao4pelN8l3RJdv3gRQ==",
					"requires": {
						"ms": "2.1.2"
					}
				},
				"ms": {
					"version": "2.1.2",
					"resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
					"integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
				}
			}
		},
		"soundcloud-downloader": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/soundcloud-downloader/-/soundcloud-downloader-1.0.0.tgz",
			"integrity": "sha512-UaEGaO+NASmTKJduGGgFjWVixLKFbvkxuX1oIYseZCsdEAg4q3o+Zn5Q9NWjQ1y0QciPkhEDnS22wnPb3XZ7pw==",
			"requires": {
				"@babel/runtime": "^7.10.3",
				"axios": "^0.21.0",
				"dotenv": "^8.2.0",
				"m3u8stream": "^0.8.0",
				"soundcloud-key-fetch": "^1.0.10"
			}
		},
		"soundcloud-key-fetch": {
			"version": "1.0.11",
			"resolved": "https://registry.npmjs.org/soundcloud-key-fetch/-/soundcloud-key-fetch-1.0.11.tgz",
			"integrity": "sha512-ofnXB3yeHGVKnFKEMBP/kIJzGu1SduQzJc+zmkPbKgelvYNsEU/aTGD0PlhmyZquaCkTGByF8CEPRrAnt7ki4g=="
		},
		"source-map": {
			"version": "0.6.1",
			"resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
			"integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
		},
		"source-map-support": {
			"version": "0.5.19",
			"resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.19.tgz",
			"integrity": "sha512-Wonm7zOCIJzBGQdB+thsPar0kYuCIzYvxZwlBa87yi/Mdjv7Tip2cyVbLj5o0cFPN4EVkuTwb3GDDyUx2DGnGw==",
			"requires": {
				"buffer-from": "^1.0.0",
				"source-map": "^0.6.0"
			}
		},
		"split2": {
			"version": "3.2.2",
			"resolved": "https://registry.npmjs.org/split2/-/split2-3.2.2.tgz",
			"integrity": "sha512-9NThjpgZnifTkJpzTZ7Eue85S49QwpNhZTq6GRJwObb6jnLFNGB7Qm73V5HewTROPyxD0C29xqmaI68bQtV+hg==",
			"requires": {
				"readable-stream": "^3.0.0"
			},
			"dependencies": {
				"readable-stream": {
					"version": "3.6.0",
					"resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
					"integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
					"requires": {
						"inherits": "^2.0.3",
						"string_decoder": "^1.1.1",
						"util-deprecate": "^1.0.1"
					}
				}
			}
		},
		"sprintf-js": {
			"version": "1.0.3",
			"resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
			"integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw="
		},
		"sqlite3": {
			"version": "5.0.2",
			"resolved": "https://registry.npmjs.org/sqlite3/-/sqlite3-5.0.2.tgz",
			"integrity": "sha512-1SdTNo+BVU211Xj1csWa8lV6KM0CtucDwRyA0VHl91wEH1Mgh7RxUpI4rVvG7OhHrzCSGaVyW5g8vKvlrk9DJA==",
			"requires": {
				"node-addon-api": "^3.0.0",
				"node-gyp": "3.x",
				"node-pre-gyp": "^0.11.0"
			},
			"dependencies": {
				"chownr": {
					"version": "1.1.4",
					"resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
					"integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg=="
				},
				"fs-minipass": {
					"version": "1.2.7",
					"resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-1.2.7.tgz",
					"integrity": "sha512-GWSSJGFy4e9GUeCcbIkED+bgAoFyj7XF1mV8rma3QW4NIqX9Kyx79N/PF61H5udOV3aY1IaMLs6pGbH71nlCTA==",
					"requires": {
						"minipass": "^2.6.0"
					}
				},
				"minipass": {
					"version": "2.9.0",
					"resolved": "https://registry.npmjs.org/minipass/-/minipass-2.9.0.tgz",
					"integrity": "sha512-wxfUjg9WebH+CUDX/CdbRlh5SmfZiy/hpkxaRI16Y9W56Pa75sWgd/rvFilSgrauD9NyFymP/+JFV3KwzIsJeg==",
					"requires": {
						"safe-buffer": "^5.1.2",
						"yallist": "^3.0.0"
					}
				},
				"minizlib": {
					"version": "1.3.3",
					"resolved": "https://registry.npmjs.org/minizlib/-/minizlib-1.3.3.tgz",
					"integrity": "sha512-6ZYMOEnmVsdCeTJVE0W9ZD+pVnE8h9Hma/iOwwRDsdQoePpoX56/8B6z3P9VNwppJuBKNRuFDRNRqRWexT9G9Q==",
					"requires": {
						"minipass": "^2.9.0"
					}
				},
				"mkdirp": {
					"version": "0.5.5",
					"resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
					"integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
					"requires": {
						"minimist": "^1.2.5"
					}
				},
				"node-pre-gyp": {
					"version": "0.11.0",
					"resolved": "https://registry.npmjs.org/node-pre-gyp/-/node-pre-gyp-0.11.0.tgz",
					"integrity": "sha512-TwWAOZb0j7e9eGaf9esRx3ZcLaE5tQ2lvYy1pb5IAaG1a2e2Kv5Lms1Y4hpj+ciXJRofIxxlt5haeQ/2ANeE0Q==",
					"requires": {
						"detect-libc": "^1.0.2",
						"mkdirp": "^0.5.1",
						"needle": "^2.2.1",
						"nopt": "^4.0.1",
						"npm-packlist": "^1.1.6",
						"npmlog": "^4.0.2",
						"rc": "^1.2.7",
						"rimraf": "^2.6.1",
						"semver": "^5.3.0",
						"tar": "^4"
					}
				},
				"nopt": {
					"version": "4.0.3",
					"resolved": "https://registry.npmjs.org/nopt/-/nopt-4.0.3.tgz",
					"integrity": "sha512-CvaGwVMztSMJLOeXPrez7fyfObdZqNUK1cPAEzLHrTybIua9pMdmmPR5YwtfNftIOMv3DPUhFaxsZMNTQO20Kg==",
					"requires": {
						"abbrev": "1",
						"osenv": "^0.1.4"
					}
				},
				"rimraf": {
					"version": "2.7.1",
					"resolved": "https://registry.npmjs.org/rimraf/-/rimraf-2.7.1.tgz",
					"integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
					"requires": {
						"glob": "^7.1.3"
					}
				},
				"semver": {
					"version": "5.7.1",
					"resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",
					"integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="
				},
				"tar": {
					"version": "4.4.13",
					"resolved": "https://registry.npmjs.org/tar/-/tar-4.4.13.tgz",
					"integrity": "sha512-w2VwSrBoHa5BsSyH+KxEqeQBAllHhccyMFVHtGtdMpF4W7IRWfZjFiQceJPChOeTsSDVUpER2T8FA93pr0L+QA==",
					"requires": {
						"chownr": "^1.1.1",
						"fs-minipass": "^1.2.5",
						"minipass": "^2.8.6",
						"minizlib": "^1.2.1",
						"mkdirp": "^0.5.0",
						"safe-buffer": "^5.1.2",
						"yallist": "^3.0.3"
					}
				},
				"yallist": {
					"version": "3.1.1",
					"resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
					"integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g=="
				}
			}
		},
		"sshpk": {
			"version": "1.16.1",
			"resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.16.1.tgz",
			"integrity": "sha512-HXXqVUq7+pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg==",
			"requires": {
				"asn1": "~0.2.3",
				"assert-plus": "^1.0.0",
				"bcrypt-pbkdf": "^1.0.0",
				"dashdash": "^1.12.0",
				"ecc-jsbn": "~0.1.1",
				"getpass": "^0.1.1",
				"jsbn": "~0.1.0",
				"safer-buffer": "^2.0.2",
				"tweetnacl": "~0.14.0"
			}
		},
		"statuses": {
			"version": "1.5.0",
			"resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
			"integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow="
		},
		"stealthy-require": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/stealthy-require/-/stealthy-require-1.1.1.tgz",
			"integrity": "sha1-NbCYdbT/SfJqd35QmzCQoyJr8ks="
		},
		"stream-shift": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/stream-shift/-/stream-shift-1.0.1.tgz",
			"integrity": "sha512-AiisoFqQ0vbGcZgQPY1cdP2I76glaVA/RauYR4G4thNFgkTqr90yXTo4LYX60Jl+sIlPNHHdGSwo01AvbKUSVQ=="
		},
		"string-similarity": {
			"version": "4.0.4",
			"resolved": "https://registry.npmjs.org/string-similarity/-/string-similarity-4.0.4.tgz",
			"integrity": "sha512-/q/8Q4Bl4ZKAPjj8WerIBJWALKkaPRfrvhfF8k/B23i4nzrlRj2/go1m90In7nG/3XDSbOo0+pu6RvCTM9RGMQ=="
		},
		"string-width": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/string-width/-/string-width-1.0.2.tgz",
			"integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
			"requires": {
				"code-point-at": "^1.0.0",
				"is-fullwidth-code-point": "^1.0.0",
				"strip-ansi": "^3.0.0"
			}
		},
		"string_decoder": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.1.1.tgz",
			"integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
			"requires": {
				"safe-buffer": "~5.1.0"
			}
		},
		"strip-ansi": {
			"version": "3.0.1",
			"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-3.0.1.tgz",
			"integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
			"requires": {
				"ansi-regex": "^2.0.0"
			}
		},
		"strip-json-comments": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
			"integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo="
		},
		"supports-color": {
			"version": "7.2.0",
			"resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
			"integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
			"requires": {
				"has-flag": "^4.0.0"
			}
		},
		"symbol-tree": {
			"version": "3.2.4",
			"resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
			"integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw=="
		},
		"systeminformation": {
			"version": "5.7.1",
			"resolved": "https://registry.npmjs.org/systeminformation/-/systeminformation-5.7.1.tgz",
			"integrity": "sha512-kHzxI4x5/DkO6uMV0GUkxFBavGnmyCWsf30AArkpX22qyKLhFLQA+2CPyEVcuhh/471XIpzZJLhi3qPoa37W5g=="
		},
		"tar": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/tar/-/tar-6.1.0.tgz",
			"integrity": "sha512-DUCttfhsnLCjwoDoFcI+B2iJgYa93vBnDUATYEeRx6sntCTdN01VnqsIuTlALXla/LWooNg0yEGeB+Y8WdFxGA==",
			"requires": {
				"chownr": "^2.0.0",
				"fs-minipass": "^2.0.0",
				"minipass": "^3.0.0",
				"minizlib": "^2.1.1",
				"mkdirp": "^1.0.3",
				"yallist": "^4.0.0"
			}
		},
		"tar-stream": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/tar-stream/-/tar-stream-2.2.0.tgz",
			"integrity": "sha512-ujeqbceABgwMZxEJnk2HDY2DlnUZ+9oEcb1KzTVfYHio0UE6dG71n60d8D2I4qNvleWrrXpmjpt7vZeF1LnMZQ==",
			"requires": {
				"bl": "^4.0.3",
				"end-of-stream": "^1.4.1",
				"fs-constants": "^1.0.0",
				"inherits": "^2.0.3",
				"readable-stream": "^3.1.1"
			},
			"dependencies": {
				"readable-stream": {
					"version": "3.6.0",
					"resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
					"integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
					"requires": {
						"inherits": "^2.0.3",
						"string_decoder": "^1.1.1",
						"util-deprecate": "^1.0.1"
					}
				}
			}
		},
		"through2": {
			"version": "2.0.5",
			"resolved": "https://registry.npmjs.org/through2/-/through2-2.0.5.tgz",
			"integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",
			"requires": {
				"readable-stream": "~2.3.6",
				"xtend": "~4.0.1"
			}
		},
		"through2-filter": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/through2-filter/-/through2-filter-3.0.0.tgz",
			"integrity": "sha512-jaRjI2WxN3W1V8/FMZ9HKIBXixtiqs3SQSX4/YGIiP3gL6djW48VoZq9tDqeCWs3MT8YY5wb/zli8VW8snY1CA==",
			"requires": {
				"through2": "~2.0.0",
				"xtend": "~4.0.0"
			}
		},
		"tiktok-scraper": {
			"version": "1.4.23",
			"resolved": "https://registry.npmjs.org/tiktok-scraper/-/tiktok-scraper-1.4.23.tgz",
			"integrity": "sha512-sBrNEPHa5uMketrcZdKJ9bmPGABfEK5WITpYxsaaRu7I470mbecAxt6/67g/bhjMfyngZaPDo5gXMvwYdxyDwQ==",
			"requires": {
				"archiver": "^3.1.1",
				"async": "^3.1.0",
				"bluebird": "^3.7.1",
				"canvas": "^2.7.0",
				"jsdom": "^16.5.3",
				"json2csv": "4.5.1",
				"ora": "^4.0.2",
				"progress": "^2.0.3",
				"request": "^2.88.0",
				"request-promise": "^4.2.4",
				"socks-proxy-agent": "^5.0.0",
				"yargs": "^14.2.0"
			},
			"dependencies": {
				"ansi-regex": {
					"version": "4.1.0",
					"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
					"integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
				},
				"bluebird": {
					"version": "3.7.2",
					"resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.7.2.tgz",
					"integrity": "sha512-XpNj6GDQzdfW+r2Wnn7xiSAd7TM3jzkxGXBGTtWKuSXv1xUV+azxAm8jdWZN06QTQk+2N2XB9jRDkvbmQmcRtg=="
				},
				"is-fullwidth-code-point": {
					"version": "2.0.0",
					"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
					"integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
				},
				"string-width": {
					"version": "3.1.0",
					"resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
					"integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
					"requires": {
						"emoji-regex": "^7.0.1",
						"is-fullwidth-code-point": "^2.0.0",
						"strip-ansi": "^5.1.0"
					}
				},
				"strip-ansi": {
					"version": "5.2.0",
					"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
					"integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
					"requires": {
						"ansi-regex": "^4.1.0"
					}
				},
				"yargs": {
					"version": "14.2.3",
					"resolved": "https://registry.npmjs.org/yargs/-/yargs-14.2.3.tgz",
					"integrity": "sha512-ZbotRWhF+lkjijC/VhmOT9wSgyBQ7+zr13+YLkhfsSiTriYsMzkTUFP18pFhWwBeMa5gUc1MzbhrO6/VB7c9Xg==",
					"requires": {
						"cliui": "^5.0.0",
						"decamelize": "^1.2.0",
						"find-up": "^3.0.0",
						"get-caller-file": "^2.0.1",
						"require-directory": "^2.1.1",
						"require-main-filename": "^2.0.0",
						"set-blocking": "^2.0.0",
						"string-width": "^3.0.0",
						"which-module": "^2.0.0",
						"y18n": "^4.0.0",
						"yargs-parser": "^15.0.1"
					}
				},
				"yargs-parser": {
					"version": "15.0.1",
					"resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-15.0.1.tgz",
					"integrity": "sha512-0OAMV2mAZQrs3FkNpDQcBk1x5HXb8X4twADss4S0Iuk+2dGnLOE/fRHrsYm542GduMveyA77OF4wrNJuanRCWw==",
					"requires": {
						"camelcase": "^5.0.0",
						"decamelize": "^1.2.0"
					}
				}
			}
		},
		"timm": {
			"version": "1.7.1",
			"resolved": "https://registry.npmjs.org/timm/-/timm-1.7.1.tgz",
			"integrity": "sha512-IjZc9KIotudix8bMaBW6QvMuq64BrJWFs1+4V0lXwWGQZwH+LnX87doAYhem4caOEusRP9/g6jVDQmZ8XOk1nw=="
		},
		"tinycolor2": {
			"version": "1.4.2",
			"resolved": "https://registry.npmjs.org/tinycolor2/-/tinycolor2-1.4.2.tgz",
			"integrity": "sha512-vJhccZPs965sV/L2sU4oRQVAos0pQXwsvTLkWYdqJ+a8Q5kPFzJTuOFwy7UniPli44NKQGAglksjvOcpo95aZA=="
		},
		"tinyurl": {
			"version": "1.1.7",
			"resolved": "https://registry.npmjs.org/tinyurl/-/tinyurl-1.1.7.tgz",
			"integrity": "sha512-NCnyDkBTByS/pLH/Vrx/DPL8EciAUDoAvruaM/WnQLfX6Uame3D1nuWNy2Z9CXw7rcsok0tjuonRLolhmyz5rg=="
		},
		"to-absolute-glob": {
			"version": "2.0.2",
			"resolved": "https://registry.npmjs.org/to-absolute-glob/-/to-absolute-glob-2.0.2.tgz",
			"integrity": "sha1-GGX0PZ50sIItufFFt4z/fQ98hJs=",
			"requires": {
				"is-absolute": "^1.0.0",
				"is-negated-glob": "^1.0.0"
			}
		},
		"to-regex-range": {
			"version": "5.0.1",
			"resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
			"integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
			"requires": {
				"is-number": "^7.0.0"
			}
		},
		"toidentifier": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.0.tgz",
			"integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw=="
		},
		"toposort-class": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/toposort-class/-/toposort-class-1.0.1.tgz",
			"integrity": "sha1-f/0feMi+KMO6Rc1OGj9e4ZO9mYg="
		},
		"totp-generator": {
			"version": "0.0.9",
			"resolved": "https://registry.npmjs.org/totp-generator/-/totp-generator-0.0.9.tgz",
			"integrity": "sha512-ZrUn747mg6+FabOeUKP4neX2oUm69HjV1484kDYvtLfcGlO4XAq5xFwet/KJW7+zc2b09puTKCKMeTxzxfaKjw==",
			"requires": {
				"jssha": "^3.1.2"
			}
		},
		"tough-cookie": {
			"version": "2.5.0",
			"resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
			"integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
			"requires": {
				"psl": "^1.1.28",
				"punycode": "^2.1.1"
			}
		},
		"tr46": {
			"version": "2.1.0",
			"resolved": "https://registry.npmjs.org/tr46/-/tr46-2.1.0.tgz",
			"integrity": "sha512-15Ih7phfcdP5YxqiB+iDtLoaTz4Nd35+IiAv0kQ5FNKHzXgdWqPoTIqEDDJmXceQt4JZk6lVPT8lnDlPpGDppw==",
			"requires": {
				"punycode": "^2.1.1"
			}
		},
		"tslib": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/tslib/-/tslib-2.2.0.tgz",
			"integrity": "sha512-gS9GVHRU+RGn5KQM2rllAlR3dU6m7AcpJKdtH8gFvQiC4Otgk98XnmMU+nZenHt/+VhnBPWwgrJsyrdcw6i23w=="
		},
		"tunnel-agent": {
			"version": "0.6.0",
			"resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
			"integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
			"requires": {
				"safe-buffer": "^5.0.1"
			}
		},
		"tv4": {
			"version": "1.3.0",
			"resolved": "https://registry.npmjs.org/tv4/-/tv4-1.3.0.tgz",
			"integrity": "sha1-0CDIRvrdUMhVq7JeuuzGj8EPeWM="
		},
		"tweetnacl": {
			"version": "0.14.5",
			"resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
			"integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q="
		},
		"tx2": {
			"version": "1.0.4",
			"resolved": "https://registry.npmjs.org/tx2/-/tx2-1.0.4.tgz",
			"integrity": "sha512-rU+y30nUY3PyIi+znvv74HzxlpULKwMPAyRK+YiCjvGkk3rY3fic3D6Z+avLpun3V5A6HFwPQ9JrBTMNEV/dxg==",
			"optional": true,
			"requires": {
				"json-stringify-safe": "^5.0.1"
			}
		},
		"type": {
			"version": "1.2.0",
			"resolved": "https://registry.npmjs.org/type/-/type-1.2.0.tgz",
			"integrity": "sha512-+5nt5AAniqsCnu2cEQQdpzCAh33kVx8n0VoFidKpB1dVVLAN/F+bgVOqOJqOnEnrhp222clB5p3vUlD+1QAnfg=="
		},
		"type-check": {
			"version": "0.3.2",
			"resolved": "https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz",
			"integrity": "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=",
			"requires": {
				"prelude-ls": "~1.1.2"
			}
		},
		"type-is": {
			"version": "1.6.18",
			"resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
			"integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
			"requires": {
				"media-typer": "0.3.0",
				"mime-types": "~2.1.24"
			}
		},
		"typedarray": {
			"version": "0.0.6",
			"resolved": "https://registry.npmjs.org/typedarray/-/typedarray-0.0.6.tgz",
			"integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c="
		},
		"ultron": {
			"version": "1.1.1",
			"resolved": "https://registry.npmjs.org/ultron/-/ultron-1.1.1.tgz",
			"integrity": "sha512-UIEXBNeYmKptWH6z8ZnqTeS8fV74zG0/eRU9VGkpzz+LIJNs8W/zM/L+7ctCkRrgbNnnR0xxw4bKOr0cW0N0Og=="
		},
		"unc-path-regex": {
			"version": "0.1.2",
			"resolved": "https://registry.npmjs.org/unc-path-regex/-/unc-path-regex-0.1.2.tgz",
			"integrity": "sha1-5z3T17DXxe2G+6xrCufYxqadUPo="
		},
		"unique-stream": {
			"version": "2.3.1",
			"resolved": "https://registry.npmjs.org/unique-stream/-/unique-stream-2.3.1.tgz",
			"integrity": "sha512-2nY4TnBE70yoxHkDli7DMazpWiP7xMdCYqU2nBRO0UB+ZpEkGsSija7MvmvnZFUeC+mrgiUfcHSr3LmRFIg4+A==",
			"requires": {
				"json-stable-stringify-without-jsonify": "^1.0.1",
				"through2-filter": "^3.0.0"
			}
		},
		"universalify": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/universalify/-/universalify-2.0.0.tgz",
			"integrity": "sha512-hAZsKq7Yy11Zu1DE0OzWjw7nnLZmJZYTDZZyEFHZdUhV8FkH5MCfoU1XMaxXovpyW5nq5scPqq0ZDP9Zyl04oQ=="
		},
		"unpipe": {
			"version": "1.0.0",
			"resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
			"integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw="
		},
		"uri-js": {
			"version": "4.4.1",
			"resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
			"integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
			"requires": {
				"punycode": "^2.1.0"
			}
		},
		"utif": {
			"version": "2.0.1",
			"resolved": "https://registry.npmjs.org/utif/-/utif-2.0.1.tgz",
			"integrity": "sha512-Z/S1fNKCicQTf375lIP9G8Sa1H/phcysstNrrSdZKj1f9g58J4NMgb5IgiEZN9/nLMPDwF0W7hdOe9Qq2IYoLg==",
			"requires": {
				"pako": "^1.0.5"
			},
			"dependencies": {
				"pako": {
					"version": "1.0.11",
					"resolved": "https://registry.npmjs.org/pako/-/pako-1.0.11.tgz",
					"integrity": "sha512-4hLB8Py4zZce5s4yd9XzopqwVv/yGNhV1Bl8NTmCq1763HeK2+EwVTv+leGeL13Dnh2wfbqowVPXCIO0z4taYw=="
				}
			}
		},
		"util": {
			"version": "0.10.4",
			"resolved": "https://registry.npmjs.org/util/-/util-0.10.4.tgz",
			"integrity": "sha512-0Pm9hTQ3se5ll1XihRic3FDIku70C+iHUdT/W926rSgHV5QgXsYbKZN8MSC3tJtSkhuROzvsQjAaFENRXr+19A==",
			"requires": {
				"inherits": "2.0.3"
			}
		},
		"util-deprecate": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
			"integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
		},
		"uuid": {
			"version": "3.4.0",
			"resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
			"integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A=="
		},
		"valid-url": {
			"version": "1.0.9",
			"resolved": "https://registry.npmjs.org/valid-url/-/valid-url-1.0.9.tgz",
			"integrity": "sha1-HBRHm0DxOXp1eC8RXkCGRHQzogA="
		},
		"validator": {
			"version": "10.11.0",
			"resolved": "https://registry.npmjs.org/validator/-/validator-10.11.0.tgz",
			"integrity": "sha512-X/p3UZerAIsbBfN/IwahhYaBbY68EN/UQBWHtsbXGT5bfrH/p4NQzUCG1kF/rtKaNpnJ7jAu6NGTdSNtyNIXMw=="
		},
		"verror": {
			"version": "1.10.0",
			"resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
			"integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
			"requires": {
				"assert-plus": "^1.0.0",
				"core-util-is": "1.0.2",
				"extsprintf": "^1.2.0"
			}
		},
		"vizion": {
			"version": "2.2.1",
			"resolved": "https://registry.npmjs.org/vizion/-/vizion-2.2.1.tgz",
			"integrity": "sha512-sfAcO2yeSU0CSPFI/DmZp3FsFE9T+8913nv1xWBOyzODv13fwkn6Vl7HqxGpkr9F608M+8SuFId3s+BlZqfXww==",
			"requires": {
				"async": "^2.6.3",
				"git-node-fs": "^1.0.0",
				"ini": "^1.3.5",
				"js-git": "^0.7.8"
			},
			"dependencies": {
				"async": {
					"version": "2.6.3",
					"resolved": "https://registry.npmjs.org/async/-/async-2.6.3.tgz",
					"integrity": "sha512-zflvls11DCy+dQWzTW2dzuilv8Z5X/pjfmZOWba6TNIVDm+2UDaJmXSOXlasHKfNBs8oo3M0aT50fDEWfKZjXg==",
					"requires": {
						"lodash": "^4.17.14"
					}
				}
			}
		},
		"vm2": {
			"version": "3.9.3",
			"resolved": "https://registry.npmjs.org/vm2/-/vm2-3.9.3.tgz",
			"integrity": "sha512-smLS+18RjXYMl9joyJxMNI9l4w7biW8ilSDaVRvFBDwOH8P0BK1ognFQTpg0wyQ6wIKLTblHJvROW692L/E53Q=="
		},
		"w3c-hr-time": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/w3c-hr-time/-/w3c-hr-time-1.0.2.tgz",
			"integrity": "sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ==",
			"requires": {
				"browser-process-hrtime": "^1.0.0"
			}
		},
		"w3c-xmlserializer": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-2.0.0.tgz",
			"integrity": "sha512-4tzD0mF8iSiMiNs30BiLO3EpfGLZUT2MSX/G+o7ZywDzliWQ3OPtTZ0PTC3B3ca1UAf4cJMHB+2Bf56EriJuRA==",
			"requires": {
				"xml-name-validator": "^3.0.0"
			}
		},
		"wait-on": {
			"version": "5.3.0",
			"resolved": "https://registry.npmjs.org/wait-on/-/wait-on-5.3.0.tgz",
			"integrity": "sha512-DwrHrnTK+/0QFaB9a8Ol5Lna3k7WvUR4jzSKmz0YaPBpuN2sACyiPVKVfj6ejnjcajAcvn3wlbTyMIn9AZouOg==",
			"requires": {
				"axios": "^0.21.1",
				"joi": "^17.3.0",
				"lodash": "^4.17.21",
				"minimist": "^1.2.5",
				"rxjs": "^6.6.3"
			}
		},
		"wcwidth": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
			"integrity": "sha1-8LDc+RW8X/FSivrbLA4XtTLaL+g=",
			"requires": {
				"defaults": "^1.0.3"
			}
		},
		"webidl-conversions": {
			"version": "6.1.0",
			"resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-6.1.0.tgz",
			"integrity": "sha512-qBIvFLGiBpLjfwmYAaHPXsn+ho5xZnGvyGvsarywGNc8VyQJUMHJ8OBKGGrPER0okBeMDaan4mNBlgBROxuI8w=="
		},
		"websocket-stream": {
			"version": "5.5.2",
			"resolved": "https://registry.npmjs.org/websocket-stream/-/websocket-stream-5.5.2.tgz",
			"integrity": "sha512-8z49MKIHbGk3C4HtuHWDtYX8mYej1wWabjthC/RupM9ngeukU4IWoM46dgth1UOS/T4/IqgEdCDJuMe2039OQQ==",
			"requires": {
				"duplexify": "^3.5.1",
				"inherits": "^2.0.1",
				"readable-stream": "^2.3.3",
				"safe-buffer": "^5.1.2",
				"ws": "^3.2.0",
				"xtend": "^4.0.0"
			}
		},
		"whatwg-encoding": {
			"version": "1.0.5",
			"resolved": "https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-1.0.5.tgz",
			"integrity": "sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw==",
			"requires": {
				"iconv-lite": "0.4.24"
			}
		},
		"whatwg-mimetype": {
			"version": "2.3.0",
			"resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-2.3.0.tgz",
			"integrity": "sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g=="
		},
		"whatwg-url": {
			"version": "8.5.0",
			"resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-8.5.0.tgz",
			"integrity": "sha512-fy+R77xWv0AiqfLl4nuGUlQ3/6b5uNfQ4WAbGQVMYshCTCCPK9psC1nWh3XHuxGVCtlcDDQPQW1csmmIQo+fwg==",
			"requires": {
				"lodash": "^4.7.0",
				"tr46": "^2.0.2",
				"webidl-conversions": "^6.1.0"
			}
		},
		"which": {
			"version": "1.3.1",
			"resolved": "https://registry.npmjs.org/which/-/which-1.3.1.tgz",
			"integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
			"optional": true,
			"requires": {
				"isexe": "^2.0.0"
			}
		},
		"which-module": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/which-module/-/which-module-2.0.0.tgz",
			"integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho="
		},
		"wide-align": {
			"version": "1.1.3",
			"resolved": "https://registry.npmjs.org/wide-align/-/wide-align-1.1.3.tgz",
			"integrity": "sha512-QGkOQc8XL6Bt5PwnsExKBPuMKBxnGxWWW3fU55Xt4feHozMUhdUMaBCk290qpm/wG5u/RSKzwdAC4i51YigihA==",
			"requires": {
				"string-width": "^1.0.2 || 2"
			}
		},
		"wikijs": {
			"version": "6.2.1",
			"resolved": "https://registry.npmjs.org/wikijs/-/wikijs-6.2.1.tgz",
			"integrity": "sha512-duhUxAWBUpxFCrWcvKL4t3m4DWJa5pNt0+RvX8Na8Vh306SRkrRwIOahs4Jj2IgRQCIcOUlIlEottrGGtikGZQ==",
			"requires": {
				"cross-fetch": "^3.0.2",
				"hyntax": "^1.1.9",
				"infobox-parser": "3.6.0"
			}
		},
		"wkx": {
			"version": "0.5.0",
			"resolved": "https://registry.npmjs.org/wkx/-/wkx-0.5.0.tgz",
			"integrity": "sha512-Xng/d4Ichh8uN4l0FToV/258EjMGU9MGcA0HV2d9B/ZpZB3lqQm7nkOdZdm5GhKtLLhAE7PiVQwN4eN+2YJJUg==",
			"requires": {
				"@types/node": "*"
			}
		},
		"word-wrap": {
			"version": "1.2.3",
			"resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
			"integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ=="
		},
		"wrap-ansi": {
			"version": "5.1.0",
			"resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
			"integrity": "sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==",
			"requires": {
				"ansi-styles": "^3.2.0",
				"string-width": "^3.0.0",
				"strip-ansi": "^5.0.0"
			},
			"dependencies": {
				"ansi-regex": {
					"version": "4.1.0",
					"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
					"integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
				},
				"ansi-styles": {
					"version": "3.2.1",
					"resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
					"integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
					"requires": {
						"color-convert": "^1.9.0"
					}
				},
				"color-convert": {
					"version": "1.9.3",
					"resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
					"integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
					"requires": {
						"color-name": "1.1.3"
					}
				},
				"color-name": {
					"version": "1.1.3",
					"resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
					"integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="
				},
				"is-fullwidth-code-point": {
					"version": "2.0.0",
					"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
					"integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
				},
				"string-width": {
					"version": "3.1.0",
					"resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
					"integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
					"requires": {
						"emoji-regex": "^7.0.1",
						"is-fullwidth-code-point": "^2.0.0",
						"strip-ansi": "^5.1.0"
					}
				},
				"strip-ansi": {
					"version": "5.2.0",
					"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
					"integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
					"requires": {
						"ansi-regex": "^4.1.0"
					}
				}
			}
		},
		"wrappy": {
			"version": "1.0.2",
			"resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
			"integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
		},
		"ws": {
			"version": "3.3.3",
			"resolved": "https://registry.npmjs.org/ws/-/ws-3.3.3.tgz",
			"integrity": "sha512-nnWLa/NwZSt4KQJu51MYlCcSQ5g7INpOrOMt4XV8j4dqTXdmlUmSHQ8/oLC069ckre0fRsgfvsKwbTdtKLCDkA==",
			"requires": {
				"async-limiter": "~1.0.0",
				"safe-buffer": "~5.1.0",
				"ultron": "~1.1.0"
			}
		},
		"xhr": {
			"version": "2.6.0",
			"resolved": "https://registry.npmjs.org/xhr/-/xhr-2.6.0.tgz",
			"integrity": "sha512-/eCGLb5rxjx5e3mF1A7s+pLlR6CGyqWN91fv1JgER5mVWg1MZmlhBvy9kjcsOdRk8RrIujotWyJamfyrp+WIcA==",
			"requires": {
				"global": "~4.4.0",
				"is-function": "^1.0.1",
				"parse-headers": "^2.0.0",
				"xtend": "^4.0.0"
			}
		},
		"xml-name-validator": {
			"version": "3.0.0",
			"resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-3.0.0.tgz",
			"integrity": "sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw=="
		},
		"xml-parse-from-string": {
			"version": "1.0.1",
			"resolved": "https://registry.npmjs.org/xml-parse-from-string/-/xml-parse-from-string-1.0.1.tgz",
			"integrity": "sha1-qQKekp09vN7RafPG4oI42VpdWig="
		},
		"xml2js": {
			"version": "0.4.23",
			"resolved": "https://registry.npmjs.org/xml2js/-/xml2js-0.4.23.tgz",
			"integrity": "sha512-ySPiMjM0+pLDftHgXY4By0uswI3SPKLDw/i3UXbnO8M/p28zqexCUoPmQFrYD+/1BzhGJSs2i1ERWKJAtiLrug==",
			"requires": {
				"sax": ">=0.6.0",
				"xmlbuilder": "~11.0.0"
			}
		},
		"xmlbuilder": {
			"version": "11.0.1",
			"resolved": "https://registry.npmjs.org/xmlbuilder/-/xmlbuilder-11.0.1.tgz",
			"integrity": "sha512-fDlsI/kFEx7gLvbecc0/ohLG50fugQp8ryHzMTuW9vSa1GJ0XYWKnhsUx7oie3G98+r56aTQIUB4kht42R3JvA=="
		},
		"xmlchars": {
			"version": "2.2.0",
			"resolved": "https://registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz",
			"integrity": "sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw=="
		},
		"xregexp": {
			"version": "2.0.0",
			"resolved": "https://registry.npmjs.org/xregexp/-/xregexp-2.0.0.tgz",
			"integrity": "sha1-UqY+VsoLhKfzpfPWGHLxJq16WUM="
		},
		"xtend": {
			"version": "4.0.2",
			"resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
			"integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ=="
		},
		"y18n": {
			"version": "4.0.3",
			"resolved": "https://registry.npmjs.org/y18n/-/y18n-4.0.3.tgz",
			"integrity": "sha512-JKhqTOwSrqNA1NY5lSztJ1GrBiUodLMmIZuLiDaMRJ+itFd+ABVE8XBjOvIWL+rSqNDC74LCSFmlb/U4UZ4hJQ=="
		},
		"yallist": {
			"version": "4.0.0",
			"resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
			"integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="
		},
		"yamljs": {
			"version": "0.3.0",
			"resolved": "https://registry.npmjs.org/yamljs/-/yamljs-0.3.0.tgz",
			"integrity": "sha512-C/FsVVhht4iPQYXOInoxUM/1ELSf9EsgKH34FofQOp6hwCPrW4vG4w5++TED3xRUo8gD7l0P1J1dLlDYzODsTQ==",
			"requires": {
				"argparse": "^1.0.7",
				"glob": "^7.0.5"
			}
		},
		"yargs": {
			"version": "13.3.2",
			"resolved": "https://registry.npmjs.org/yargs/-/yargs-13.3.2.tgz",
			"integrity": "sha512-AX3Zw5iPruN5ie6xGRIDgqkT+ZhnRlZMLMHAs8tg7nRruy2Nb+i5o9bwghAogtM08q1dpr2LVoS8KSTMYpWXUw==",
			"requires": {
				"cliui": "^5.0.0",
				"find-up": "^3.0.0",
				"get-caller-file": "^2.0.1",
				"require-directory": "^2.1.1",
				"require-main-filename": "^2.0.0",
				"set-blocking": "^2.0.0",
				"string-width": "^3.0.0",
				"which-module": "^2.0.0",
				"y18n": "^4.0.0",
				"yargs-parser": "^13.1.2"
			},
			"dependencies": {
				"ansi-regex": {
					"version": "4.1.0",
					"resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-4.1.0.tgz",
					"integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg=="
				},
				"is-fullwidth-code-point": {
					"version": "2.0.0",
					"resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
					"integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="
				},
				"string-width": {
					"version": "3.1.0",
					"resolved": "https://registry.npmjs.org/string-width/-/string-width-3.1.0.tgz",
					"integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
					"requires": {
						"emoji-regex": "^7.0.1",
						"is-fullwidth-code-point": "^2.0.0",
						"strip-ansi": "^5.1.0"
					}
				},
				"strip-ansi": {
					"version": "5.2.0",
					"resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-5.2.0.tgz",
					"integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
					"requires": {
						"ansi-regex": "^4.1.0"
					}
				}
			}
		},
		"yargs-parser": {
			"version": "13.1.2",
			"resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-13.1.2.tgz",
			"integrity": "sha512-3lbsNRf/j+A4QuSZfDRA7HRSfWrzO0YjqTJd5kjAq37Zep1CEgaYmrH9Q3GwPiB9cHyd1Y1UwggGhJGoxipbzg==",
			"requires": {
				"camelcase": "^5.0.0",
				"decamelize": "^1.2.0"
			}
		},
		"ytdl-core": {
			"version": "4.8.0",
			"resolved": "https://registry.npmjs.org/ytdl-core/-/ytdl-core-4.8.0.tgz",
			"integrity": "sha512-LFhhwqFojReoaME17VpsFeiamygM0W/YNG8O02mrmS2O6Em5LjCPiJYdq7Af3CmJtBEOCdptSZ3Ql+3LGWDGvg==",
			"requires": {
				"m3u8stream": "^0.8.3",
				"miniget": "^4.0.0",
				"sax": "^1.1.3"
			}
		},
		"zip-stream": {
			"version": "2.1.3",
			"resolved": "https://registry.npmjs.org/zip-stream/-/zip-stream-2.1.3.tgz",
			"integrity": "sha512-EkXc2JGcKhO5N5aZ7TmuNo45budRaFGHOmz24wtJR7znbNqDPmdZtUauKX6et8KAVseAMBOyWJqEpXcHTBsh7Q==",
			"requires": {
				"archiver-utils": "^2.1.0",
				"compress-commons": "^2.1.1",
				"readable-stream": "^3.4.0"
			},
			"dependencies": {
				"readable-stream": {
					"version": "3.6.0",
					"resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
					"integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
					"requires": {
						"inherits": "^2.0.3",
						"string_decoder": "^1.1.1",
						"util-deprecate": "^1.0.1"
					}
				}
			}
		}
	}
}

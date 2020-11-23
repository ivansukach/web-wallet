import * as Fingerprint2 from "fingerprintjs2"
export const getFingerprint = async () => {
  let fp_options = {
    excludes: {
      touchSupport: true,
    },
  }
  const components = await Fingerprint2.getPromise(fp_options)
  const values = components.map((component) => component.value)
  return Fingerprint2.x64hash128(values.join(``), 31)
}

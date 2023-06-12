import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
  } from "@react-pdf/renderer";

// Crea un componente Receipt que reciba como props el usuario y el servicio activo
const Receipt = ({ user, service }) => {
  // Crea los estilos para el pdf
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "#E4E4E4",
      padding: 20,
    },
    header: {
      textAlign: "center",
      margin: 10,
      fontSize: 24,
      fontWeight: "bold",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    label: {
      fontSize: 18,
      fontWeight: "bold",
    },
    value: {
      fontSize: 18,
    },
  });

  // Usa los componentes Document, Page, View y Text para crear el diseño del pdf
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Comprobante de pago</Text>
        <View style={styles.section}>
          <Text style={styles.label}>Datos del usuario:</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.value}>{user.nombre}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Saldo actual:</Text>
            <Text style={styles.value}>${user.saldoInicial}</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Datos del servicio:</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.value}>{service.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Monto:</Text>
            <Text style={styles.value}>${service.amount}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Fecha:</Text>
            <Text style={styles.value}>{new Date().toLocaleDateString()}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Receipt;